import IMovie from "../../assets/interfaces/IMovie"

interface ChangeMoviesState {
    type: 'CHANGE_MOVIES_STATE',
    payload: IMovie[]
}

export type MovieAction = ChangeMoviesState