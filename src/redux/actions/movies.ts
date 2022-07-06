import IMovie from "../../assets/interfaces/IMovie"

export enum MovieActionTypes {
    CHANGE_MOVIES_STATE = 'CHANGE_MOVIES_STATE'
}

interface ChangeMoviesState {
    type: MovieActionTypes.CHANGE_MOVIES_STATE,
    payload: IMovie[]
}

export type MovieAction = ChangeMoviesState