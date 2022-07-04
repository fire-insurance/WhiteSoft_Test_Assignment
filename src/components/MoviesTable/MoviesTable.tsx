import { FC } from 'react'
import IMovie from '../../assets/interfaces/IMovie'
import styles from './MoviesTable.module.scss'
import Movie from '../Movie/Movie'

interface MoviesTableData {
    data: IMovie[]
}

const MoviesTable: FC<MoviesTableData> = ({ data }) => {

    return (
        <table className={styles.table}>
            <thead className={styles.table__header}>
                <tr className={styles.table__row}>
                    <th>Название</th>
                    <th>Оценка</th>
                    <th>Дата</th>
                    <th>Описание</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map(movie =>
                        <Movie
                            key={movie.id}
                            movie={movie}
                            rowClass={styles.table__row}
                        />)
                }

            </tbody>


        </table>
    )
}

export default MoviesTable