import { FC, useState } from "react"
import trimText from "../../../assets/helpers/trimText"
import IMovie, { defaultMovie } from "../../../assets/interfaces/IMovie"
import ProjectButton from "../../ProjectButton/ProjectButton"
import RatingSelector from "../../Selector/RatingSelector"
import styles from '../Movie.module.scss'
import form_styles from './MovieForm.module.scss'
import cn from 'classnames'

interface MovieComponent {
    movie?: IMovie,
    rowClass?: string,
    stopEditingMovie(): any,
    acceptChanges(movie: IMovie): void,
}

type ValidationErrors = Partial<Omit<IMovie, 'id' | 'rate'>>

/**
 * Возвращает форму добавления/изменения фильма
 *
 * @param movie - объект типа {@link IMovie}
 * @param rowClass - класс, задающий стиль контейнера компонента
 * @param stopEditingMovie() - функция, выполняемая по клику на кнопку "отменить" в данном компоненте
 * @param acceptChanges(movie) - функция, выполняемая по клику на кнопку "принять" в данном компоненте
 *
 */

const MovieForm: FC<MovieComponent> = ({ movie, rowClass, stopEditingMovie, acceptChanges }) => {

    const [movieState, setMovieState] = useState<IMovie>(movie ?? defaultMovie)
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})

    // Управление текстовыми инпутами
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputName = e.currentTarget.name
        const inputValue = e.currentTarget.value

        // Не изменяем значения поля comment в состоянии, если полученная длина больше 200
        if (inputName === 'comment' && inputValue.length > 200) return

        // Если для поля существует ошибка заполнения - снимаем ее 
        if (validationErrors[inputName as keyof ValidationErrors]) {
            setValidationErrors(prevState => {
                return { ...prevState, [inputName]: '' }
            })
        }

        setMovieState(prevState => {
            return { ...prevState, [inputName]: inputValue }
        })
    }

    const handleRateChange = (rate: number) => {
        setMovieState(prevState => {
            return { ...prevState, rate: rate }
        })
    }

    const handleSubmit = () => {
        for (const key in movieState) {
            const keyValue = movieState[key as keyof IMovie]
            if (keyValue === '' && key !== 'id') {

                setValidationErrors(prevState => {
                    return { ...prevState, [key]: 'Поле не должно быть пустым' }
                })
                return
            }
        }

        acceptChanges(movieState)
        stopEditingMovie()
    }


    return (
        <tr className={rowClass}>
            <td className={cn(styles['movie-title'], { [form_styles['input-error']]: validationErrors.title })}>
                <h4 className={styles['cell-title']}>Название</h4>
                <input
                    type="text"
                    name="title"
                    value={movieState.title}
                    onChange={handleInput}
                    className={form_styles.input}
                />
                <p className={form_styles['input-error__text']}>{validationErrors.title}</p>
            </td>
            <td>
                <h4 className={styles['cell-title']}>Оценка</h4>
                <RatingSelector
                    onChoice={handleRateChange}
                    hasAllOption={false}
                    defaultValueIndex={movieState.rate - 1}
                    smallStars
                />
            </td>
            <td className={cn({ [form_styles['input-error']]: validationErrors.date })}>
                <h4 className={styles['cell-title']}>Дата</h4>
                <input
                    type="date"
                    name="date"
                    value={movieState.date}
                    onChange={handleInput}
                    className={form_styles.input}
                />
                <p className={form_styles['input-error__text']}>{validationErrors.date}</p>
            </td>
            <td className={cn(styles.comment, { [form_styles['input-error']]: validationErrors.comment })} >
                <h4 className={styles['cell-title']}>Описание</h4>
                <textarea
                    name="comment"
                    value={trimText(movieState.comment, 200, false)}
                    onChange={handleInput}
                    className={form_styles.input}
                />
                <p className={form_styles['input-error__text']}>{validationErrors.comment}</p>
            </td>
            <td className={styles['control-buttons']}>
                <ProjectButton
                    text='Принять'
                    button_style='accept'
                    button_type="submit"
                    onClick={handleSubmit}
                    buttonClass={styles.button}
                />
                <ProjectButton
                    text='Отменить'
                    button_style='cancel'
                    onClick={stopEditingMovie}
                    buttonClass={styles.button}
                />
            </td>
        </tr>
    )
}


export default MovieForm