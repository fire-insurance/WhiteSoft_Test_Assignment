import { useEffect } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import styles from './MoviesTable.module.scss'
import Movie from '../Movie/Movie'
import RatingSelector from '../Selector/RatingSelector'
import ProjectButton from '../ProjectButton/ProjectButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useReduxActions } from '../../hooks/useReduxActions'


const MoviesTable = () => {

    const movies: IMovie[] = useTypedSelector(state => state.movies)
    const { getMovies, filterByRating, addMovie, editMovie, deleteMovie } = useReduxActions()

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className={styles['table-controls']}>
                <RatingSelector onChoice={filterByRating} />
                <ProjectButton
                    text='Добавить фильм'
                    button_style='primary'
                    onClick={() => { }}
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
                        movies.map(movie =>
                            <Movie
                                key={movie.id}
                                movie={movie}
                                rowClass={styles.table__row}
                                acceptChanges={editMovie}
                                deleteMovie={deleteMovie}
                            />)
                    }

                </tbody>
            </table>
        </>

    )
}

export default MoviesTable