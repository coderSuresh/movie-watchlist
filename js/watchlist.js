const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || []
    if (watchlist.includes(movie)) {
        alert("Movie already added to watchlist")
    }
    else {
        watchlist.unshift(movie)
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
        alert("Movie added to watchlist")
    }
}

const removeFromWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || []
    if (watchlist.includes(movie)) {
        const index = watchlist.indexOf(movie)
        watchlist.splice(index, 1)
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
        alert("Movie removed from watchlist")
        location.reload()
    }
    else {
        alert("Movie not found in watchlist")
    }
}

export { addToWatchlist, removeFromWatchlist }