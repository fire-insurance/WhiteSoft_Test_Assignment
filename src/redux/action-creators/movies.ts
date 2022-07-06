import { Dispatch } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import moviesJSON from '../../assets/MOCK_DATA.json'
import { MovieAction, MovieActionTypes } from '../actions/movies'
import { v4 as uuidv4 } from 'uuid';

// По хорошему тут должны быть async-запросы на backend, позволяющие изменять записи в БД
// но в рамках тестового задания обойдемся без бека и будем изменять данные о фильмах 
// в переменной movies

let movies = moviesJSON

// Здесь по хорошему делать интерфейс под объект с разными типами фильтров,
// но в рамках задания этого не требуется

export const getMovies = (filter?: number | string) => {
    return (dispatch: Dispatch<MovieAction>) => {
        const moviesToState = filter ? filterByRating(filter) : movies
        dispatch({ type: MovieActionTypes.CHANGE_MOVIES_STATE, payload: moviesToState })
    }
}

const filterByRating = (rate: number | string) => {
    if (rate > 0 && rate <= 5) {
        const filteredMovies = movies.filter((movie) => movie.rate === rate)
        return filteredMovies
    }

    // Если rate = 'all'
    return movies
}

export const editMovie = (movie: IMovie) => {
    return (dispatch: Dispatch<MovieAction>) => {
        movies = movies.map(movieElement => {
            if (movie.id === movieElement.id)
                return { ...movieElement, ...movie }

            return movieElement
        })
    }
}

export const deleteMovie = (id: string) => {
    return (dispatch: Dispatch<MovieAction>) => {
        movies = movies.filter(movie => movie.id !== id)
    }
}

export const addMovie = (movie: IMovie) => {
    return (dispatch: Dispatch<MovieAction>) => {
        const appendId = uuidv4()
        movie = { ...movie, id: appendId }
        movies = [movie, ...movies]
    }
}