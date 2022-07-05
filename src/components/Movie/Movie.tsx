import { FC, useState } from 'react';
import IMovie from '../../assets/interfaces/IMovie';
import styles from './Movie.module.scss'
import trimText from '../../assets/helpers/trimText'
import StarsRating from '../StarsRating/StarsRating';
import ProjectButton from '../ProjectButton/ProjectButton';
import MovieView from './MovieView';
import MovieForm from './MovieForm';

interface MovieComponent {
    movie: IMovie,
    rowClass?: string
    acceptChanges(movie: IMovie): void,
    deleteMovie(id: string): () => void
}

const Movie: FC<MovieComponent> = ({ movie, rowClass, acceptChanges, deleteMovie }) => {

    const [editingMovie, setEditingMovie] = useState<boolean>(false)

    const startEditingMovie = () => setEditingMovie(true)
    const stopEditingMovie = () => setEditingMovie(false)

    return (
        <>
            {
                editingMovie ?
                    <MovieForm
                        movie={movie}
                        stopEditingMovie={stopEditingMovie}
                        acceptChanges={acceptChanges}
                        rowClass={rowClass}
                    ></MovieForm>
                    :
                    <MovieView
                        movie={movie}
                        deleteMovie={deleteMovie}
                        startEditingMovie={startEditingMovie}
                        rowClass={rowClass}
                    ></MovieView>
            }

        </>
    )
}

export default Movie;