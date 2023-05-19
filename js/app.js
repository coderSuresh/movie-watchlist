import { findMovieDetails, searchMovie } from "./movieDetails.js"
import { addToWatchlist, removeFromWatchlist } from "./watchlist.js"
import { searchInput, watchlistContainer } from "./constants.js"

const searchMovieOnEnter = (e) => {
    if (e.key === "Enter") {
        searchMovie(searchInput.value)
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-watchlist")) {
        const movieImdbID = e.target.dataset.imdbId
        addToWatchlist(movieImdbID)
    }

    if (e.target.classList.contains("remove-from-watchlist")) {
        const movieImdbID = e.target.dataset.imdbId
        removeFromWatchlist(movieImdbID)
    }

    if (e.target.classList.contains("search-btn")) {
        searchMovie(searchInput.value)
    }
})

if (location.href.includes("watchlist")) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || []
    if (watchlist.length > 0) {
        watchlistContainer.innerHTML = ""
        findMovieDetails(watchlist)
    }
}

searchInput && searchInput.addEventListener("keypress", searchMovieOnEnter)