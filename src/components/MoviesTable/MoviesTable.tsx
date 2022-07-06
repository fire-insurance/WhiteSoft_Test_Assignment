import { useEffect, useState } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import styles from './MoviesTable.module.scss'
import Movie from '../Movie/Movie'
import RatingSelector from '../Selector/RatingSelector'
import ProjectButton from '../ProjectButton/ProjectButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useReduxActions } from '../../hooks/useReduxActions'
import MovieForm from '../Movie/MovieForm'

/**
 * Компонент, отображающий таблицу с фильмами и элементы управления:
 * 
 * фильтр по рейтингу
 * кнопка "Добавить фильм"
 */

const MoviesTable = () => {

    const movies: IMovie[] = useTypedSelector(state => state.movies)
    const { getMovies, addMovie, editMovie, deleteMovie } = useReduxActions()

    const [isAddingMovie, setIsAddingMovie] = useState<boolean>(false)
    const startAddingMovie = () => setIsAddingMovie(true)
    const stopAddingMovie = () => setIsAddingMovie(false)

    const [ratingFilter, setRatingFilter] = useState<number | string>('all')
    const [moviesDataChanged, setMoviesDataChanged] = useState<boolean>(false)

    useEffect(() => {
        getMovies(ratingFilter)
    }, [ratingFilter, moviesDataChanged])

    const filterByRating = (rate: number | string) => {
        if (rate !== ratingFilter) setRatingFilter(rate)
    }

    const handleEditMovie = (movie: IMovie) => {
        editMovie(movie)
        setMoviesDataChanged(prevState => !prevState)
    }

    const handleDeleteMovie = (id: string) => {
        deleteMovie(id)
        setMoviesDataChanged(prevState => !prevState)
    }

    const handleAddMovie = (movie: IMovie) => {
        addMovie(movie)
        setMoviesDataChanged(prevState => !prevState)
    }

    return (
        <>
            <div className={styles['table-controls']}>
                <RatingSelector
                    onChoice={filterByRating}
                    title='Оценка:'
                />
                <ProjectButton
                    text='Добавить фильм'
                    button_style={isAddingMovie ? 'disabled' : 'primary'}
                    onClick={startAddingMovie}
                    buttonClass={styles['add-movie-btn']}
                />
            </div>

            <table className={styles.table}>
                <thead className={styles.table__header}>
                    <tr className={styles.table__row}>
                        <th>Название</th>
                        <th>Оценка</th>
                        <th>Дата</th>
                        <th>Описание</th>
                    </tr>
                </thead>

                <tbody className={styles.table__body}>
                    {
                        isAddingMovie
                        &&
                        <MovieForm
                            acceptChanges={handleAddMovie}
                            stopEditingMovie={stopAddingMovie}
                            rowClass={styles.table__row}
                        />
                    }
                    {
                        movies.length === 0 ?
                            <tr className={styles.table__row}>
                                <td className={styles['empty-table-text']}>
                                    Ничего не найдено
                                </td>
                            </tr>
                            :
                            movies.map(movie =>
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                    rowClass={styles.table__row}
                                    acceptChanges={handleEditMovie}
                                    deleteMovie={handleDeleteMovie}
                                />)
                    }

                </tbody>
            </table>
        </>
    )
}

export default MoviesTable