import { FC, useState } from 'react';
import IMovie from '../../assets/interfaces/IMovie';
import MovieView from './MovieView';
import MovieForm from './MovieForm';

interface MovieComponent {
    movie: IMovie,
    rowClass?: string
    acceptChanges(movie: IMovie): void,
    deleteMovie(id: string): void
}

/**
 * Возвращает компонент фильма с возможностью переключения режима с readonly на форму с инпутами
 *
 * @param movie - объект типа {@link IMovie}
 * @param rowClass - класс, задающий стиль контейнера 
 * @param acceptChanges - функция, выполняемая по клику на кнопку "принять" в  подкомпоненте с формой изменения фильма
 * @param deleteMovie - функция, выполняемая по клику на кнопку "удалить" в данном компоненте
 *
 */

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