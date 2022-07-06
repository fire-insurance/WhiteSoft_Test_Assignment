import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import IMovie from '../../assets/interfaces/IMovie'
import moviesJSON from '../../assets/MOCK_DATA.json'
import { MovieAction } from '../actions/movies'

// По хорошему тут должны быть async-запросы на backend, позволяющие изменять записи в БД
// но в рамках тестового задания обойдемся без бека и будем изменять данные о фильмах 
// в переменной movies

let movies = moviesJSON

export const getMovies = () => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({ type: 'CHANGE_MOVIES_STATE', payload: movies })
    }
}

export const filterByRating = (rate: number | string) => {
    return (dispatch: Dispatch<MovieAction>) => {
        if (rate > 0 && rate <= 5) {
            const filteredMovies = movies.filter((movie) => movie.rate === rate)
            dispatch({ type: 'CHANGE_MOVIES_STATE', payload: filteredMovies })
            return
        }

        // Если rate = 'all'
        dispatch({ type: 'CHANGE_MOVIES_STATE', payload: movies })
    }
}

export const editMovie = (movie: IMovie) => {
    return (dispatch: Dispatch<MovieAction>) => {

        movies = movies.map(movieElement => {
            if (movie.id === movieElement.id)
                return { ...movieElement, ...movie }

            return movieElement
        })
        dispatch({ type: 'CHANGE_MOVIES_STATE', payload: movies })
    }
}

export const deleteMovie = (id: string) => {
    return (dispatch: Dispatch<MovieAction>) => {

        movies = movies.filter(movie => movie.id !== id)
        dispatch({ type: 'CHANGE_MOVIES_STATE', payload: movies })
    }
}

export const addMovie = (movie: IMovie) => {
    return (dispatch: Dispatch<MovieAction>) => {

        movies.unshift(movie)
        dispatch({ type: 'CHANGE_MOVIES_STATE', payload: movies })
    }
}