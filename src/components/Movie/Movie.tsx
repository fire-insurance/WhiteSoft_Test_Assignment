import { FC } from 'react';
import IMovie from '../../assets/interfaces/IMovie';
import styles from './Movie.module.scss'
import trimText from '../../assets/helpers/trimText'
import StarsRating from '../StarsRating/StarsRating';
import ProjectButton from '../ProjectButton/ProjectButton';

interface MovieComponent {
    movie: IMovie,
    rowClass?: string
}

const Movie: FC<MovieComponent> = ({ movie, rowClass }) => {

    const { id, title, rate, comment, date } = movie

    return (
        <tr className={rowClass}>
            <td className={styles['movie-title']}>
                <h4 className={styles['cell-title']}>Название</h4>
                {title}
            </td>
            <td>
                <h4 className={styles['cell-title']}>Оценка</h4>
                <StarsRating rate={rate} />
            </td>
            <td>
                <h4 className={styles['cell-title']}>Дата</h4>
                {date}
            </td>
            <td className={styles.comment}>
                <h4 className={styles['cell-title']}>Описание</h4>
                {trimText(comment, 200, true)}
            </td>
            <td className={styles['control-buttons']}>
                <ProjectButton
                    text='Изменить'
                    button_style='edit'
                    onClick={() => { }}
                    buttonClass={styles.button}
                />
                <ProjectButton
                    text='Удалить'
                    button_style='delete'
                    onClick={() => { }}
                    buttonClass={styles.button}
                />
            </td>
        </tr>
    )
}

export default Movie;