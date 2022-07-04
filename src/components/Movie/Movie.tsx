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
            <td>{title}</td>
            <td><StarsRating rate={rate} /></td>
            <td>{date}</td>
            <td>{trimText(comment, 200, true)}</td>
            <td className={styles['control-buttons']}>
                <ProjectButton
                    text='Изменить'
                    button_style='_style_edit'
                    img_alt='Изменить данные фильма'
                    onClick={() => { }}
                />
                <ProjectButton
                    text='Удалить'
                    button_style='_style_delete'
                    img_alt='Удалить фильм'
                    onClick={() => { }}
                />
            </td>
        </tr>
    )
}

export default Movie;