import { FC, useEffect, useState } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import styles from './MoviesTable.module.scss'
import Movie from '../Movie/Movie'
import RatingSelector from '../Selector/RatingSelector'
import ProjectButton from '../ProjectButton/ProjectButton'
import { getMovies, filterByRating, addMovie, editMovie, deleteMovie } from '../../movies-data'


const MoviesTable = () => {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        setMovies(getMovies())
    }, [])

    const filterTableByRating = (rate: number | string) => {
        setMovies(filterByRating(rate))
    }

    const addMovieToTable = (movie: IMovie) => {

    }

    return (
        <>
            <div className={styles['table-controls']}>
                <RatingSelector onChoice={filterTableByRating} />
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