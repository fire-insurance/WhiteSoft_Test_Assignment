import { FC } from "react"
import trimText from "../../../assets/helpers/trimText"
import IMovie from "../../../assets/interfaces/IMovie"
import ProjectButton from "../../ProjectButton/ProjectButton"
import StarsRating from "../../StarsRating/StarsRating"
import styles from '../Movie.module.scss'

interface MovieComponent {
    movie: IMovie,
    rowClass?: string,
    startEditingMovie(): any,
    deleteMovie(id: string): any
}

const MovieView: FC<MovieComponent> = ({ movie, rowClass, startEditingMovie, deleteMovie }) => {

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
                    onClick={startEditingMovie}
                    buttonClass={styles.button}
                />
                <ProjectButton
                    text='Удалить'
                    button_style='delete'
                    onClick={() => deleteMovie(id)}
                    buttonClass={styles.button}
                />
            </td>
        </tr>
    )
}


export default MovieView