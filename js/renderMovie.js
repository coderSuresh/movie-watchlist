import { movieContainer, watchlistContainer, mainContainer } from './constants.js'

const renderMovie = (movie, watchlistClass) => {
    mainContainer.setAttribute("class", "md:mx-10 mx-5")
    fetch('movieTemplate.html')
        .then(response => response.text())
        .then(template => {
            const movieHtml = template
                .replace('{poster}', movie.Poster)
                .replace('{title}', movie.Title)
                .replace('{rating}', movie.imdbRating)
                .replace('{runtime}', movie.Runtime)
                .replace('{genre}', movie.Genre)
                .replace('{plot}', movie.Plot)
                .replace('{imdbID}', movie.imdbID)
                .replace('{watchlist-class}', watchlistClass)
                .replace('{watchlist-text}', watchlistClass === "add-to-watchlist" ? "Watchlist" : "Remove")
                .replace('{icon}', watchlistClass === "add-to-watchlist" ? "plus" : "minus")
                .replace('{alt}', watchlistClass === "add-to-watchlist" ? "add to watchlist" : "remove from watchlist")

            if (watchlistClass === "add-to-watchlist") {
                movieContainer && (movieContainer.innerHTML += movieHtml)
            } else if (watchlistClass === "remove-from-watchlist") {
                watchlistContainer && (watchlistContainer.innerHTML += movieHtml)
            }
        });
}

export { renderMovie }