import IMovie from './assets/interfaces/IMovie'
import moviesJSON from './assets/MOCK_DATA.json'

let movies = moviesJSON

export const getMovies = () => movies

export const filterByRating = (rate: number | string) => {

    if (rate > 0 && rate <= 5) {
        const filteredMovies = movies.filter((movie) => movie.rate === rate)
        return filteredMovies
    }

    return movies
}

export const editMovie = (movie: IMovie) => {
    movies = movies.map(movieElement => {
        if (movie.id === movieElement.id)
            return { ...movieElement, ...movie }

        return movieElement
    })
}

export const deleteMovie = (id: string) => () => {
    movies = movies.filter(movie => movie.id !== id)
}

export const addMovie = (movie: IMovie) => {
    movies.unshift(movie)
}