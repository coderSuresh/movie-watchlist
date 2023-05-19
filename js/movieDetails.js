import { apiConfig } from './api.js'
import { renderMovie } from "./renderMovie.js"
import { mainContainer, movieContainer, searchInput } from './constants.js'

let movieDetails = {}

const findMovieDetails = (moviesOnWatchlist) => {
    const movies = movieDetails.Search ? movieDetails.Search : moviesOnWatchlist
    movies.forEach(movie => {
        const imdbID = movie.imdbID ? movie.imdbID : movie
        fetch(apiConfig.apiURL + `&i=${imdbID}`)
            .then(response => response.json())
            .then(data => {
                renderMovie(data, movieDetails.Search ? "add-to-watchlist" : "remove-from-watchlist")
            })
            .catch(error => alert(error))
    })
}

const searchMovie = () => {
    if (searchInput.value !== "") {
        fetch(apiConfig.apiURL + `&s=${searchInput.value}`)
            .then(response => response.json())
            .then(data => {
                searchInput.value = ''
                movieContainer.innerHTML = ''
                movieDetails = data
                findMovieDetails()
            })
            .catch(() => {
                mainContainer.setAttribute("class", "min-h-[calc(100vh-13rem)] flex items-center justify-center")
                movieContainer.innerHTML = `
                    <p class="text-center text-gray-text mt-3 text-md font-medium">
                        Unable to find what you’re looking for. <br />Please try another search.
                    </p>
                `
            })
    } else {
        alert("Please enter a movie name")
    }
}

export { searchMovie, findMovieDetails }