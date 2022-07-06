import styles from './ProjectButton.module.scss'
import deleteIcon from '../../assets/img/deleteIcon.svg'
import editIcon from '../../assets/img/editIcon.svg'
import acceptIcon from '../../assets/img/acceptIcon.svg'
import cancelIcon from '../../assets/img/cancelIcon.svg'
import { FC } from 'react'
import cn from 'classnames'

interface ProjectButtonProps {
    button_type?: 'submit' | 'button' | 'reset',
    text?: string,
    onClick(): any,
    button_style: 'primary' | 'delete' | 'edit' | 'accept' | 'cancel' | 'disabled',
    buttonClass?: string
    img?: string
}

const defaultImages = {
    'delete': deleteIcon,
    'edit': editIcon,
    'accept': acceptIcon,
    'cancel': cancelIcon,
}

/**
 * Возвращает кнопку с единым для проекта стилем
 *
 * @param button_type - HTML-тип кнопки (sumbit, reset, button)
 * @param text - внутренний текст кнопки
 * @param onClick - функция, выполняемая при нажатии на кнопку
 * @param button_style - выбор одного из преодопределенных вариантов отображения кнопки
 * @param buttonClass - дополнительный className для изменения стиля кнопки
 * @param img - иконка внутри кнопки
 */

const ProjectButton: FC<ProjectButtonProps> = ({ button_type, text, onClick, button_style, buttonClass, img }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, styles['button_style_' + button_style], buttonClass)}
            type={button_type ? button_type : 'button'}
        >
            {text && <p className={styles['text-content']}>{text}</p>}

            {img ?
                <img src={img} className={styles.icon} alt=''></img>
                :
                button_style !== 'primary' && button_style !== 'disabled'
                && <img src={defaultImages[button_style]} className={styles.icon} alt='' />
            }
        </button>
    )
}

export default ProjectButton