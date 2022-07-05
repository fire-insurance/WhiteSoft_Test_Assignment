import { FC, useEffect, useState } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import styles from './MoviesTable.module.scss'
import Movie from '../Movie/Movie'
import RatingSelector from '../Selector/RatingSelector'
import ProjectButton from '../ProjectButton/ProjectButton'

interface MoviesTableData {
    getMovies(): IMovie[]
}

const MoviesTable: FC<MoviesTableData> = ({ getMovies }) => {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        setMovies(getMovies())
    }, [])

    const filterByRating = (rate: number | string) => {
        if (rate > 0 && rate <= 5) {
            const filteredMovies = getMovies().filter((movie) => movie.rate === rate)
            setMovies(filteredMovies)
        }
        else setMovies(getMovies())
    }

    return (
        <>
            <div className={styles['table-controls']}>
                <RatingSelector onChoice={filterByRating} />
                <ProjectButton
                    text='Добавить фильм'
                    button_style='primary'
                    onClick={() => { }}
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
                            />)
                    }

                </tbody>
            </table>
        </>

    )
}

export default MoviesTable