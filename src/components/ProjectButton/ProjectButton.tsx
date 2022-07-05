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
    button_style: 'primary' | 'delete' | 'edit' | 'accept' | 'cancel',
    buttonClass?: string
    img?: string
}

const defaultImages = {
    'primary': '',
    'delete': deleteIcon,
    'edit': editIcon,
    'accept': acceptIcon,
    'cancel': cancelIcon,
}

const ProjectButton: FC<ProjectButtonProps> = ({ button_type, text, onClick, button_style, buttonClass, img }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, styles['button_style_' + button_style], buttonClass)}
            type={button_type ? button_type : 'button'}
        >
            {text && <p className={styles['text-content']}>{text}</p>}

            {img ?
                <img src={img} className={styles.icon}></img>
                :
                button_style !== 'primary' && <img src={defaultImages[button_style]} className={styles.icon} />
            }
        </button>
    )
}

export default ProjectButton