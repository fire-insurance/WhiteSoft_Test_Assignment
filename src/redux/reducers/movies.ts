import IMovie from '../../assets/interfaces/IMovie'
import { MovieAction } from '../actions/movies'

// Если бы у нас были Async запросы на сервер, то потребовалось бы
// хранить стейт с полями movies, loading и error
// тогда нужны были бы экшены: 
// 1. устанавливающие loading=true при запросе на сервер
// 2. устанавливающие error=true при ошибке запроса

interface MoviesState {
    movies: IMovie[]
}

const initialState: MoviesState = {
    movies: []
}

export const moviesReducer = (state = initialState, action: MovieAction) => {
    switch (action.type) {
        case "CHANGE_MOVIES_STATE":
            return { movies: action.payload }
        default:
            return state
    }
}

export type RootState = ReturnType<typeof moviesReducer>