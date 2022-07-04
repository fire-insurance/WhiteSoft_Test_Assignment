import { FC } from 'react';
import IMovie from '../../assets/interfaces/IMovie';
import styles from './Movie.module.scss'
import trimText from '../../assets/helpers/trimText'

interface MovieComponent {
    movie: IMovie,
    rowClass?: string
}

const Movie: FC<MovieComponent> = ({ movie, rowClass }) => {

    const { id, title, rate, comment, date } = movie

    return (
        <tr className={rowClass}>
            <td>{title}</td>
            <td>{rate}</td>
            <td>{date}</td>
            <td>{trimText(comment, 200, true)}</td>
        </tr>
    )
}

export default Movie;