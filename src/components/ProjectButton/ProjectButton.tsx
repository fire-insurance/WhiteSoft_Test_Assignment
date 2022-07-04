import styles from './ProjectButton.module.scss'
import deleteIcon from '../../assets/img/deleteIcon.svg'
import editIcon from '../../assets/img/editIcon.svg'
import acceptIcon from '../../assets/img/acceptIcon.svg'
import { FC } from 'react'
import cn from 'classnames'

interface ProjectButtonProps {
    button_type?: 'submit' | 'button' | 'reset',
    text?: string,
    onClick(): any,
    button_style: '_style_primary' | '_style_delete' | '_style_edit' | '_style_accept',
    img_alt?: string
}

const defaultImages = {
    '_style_primary': '',
    '_style_delete': deleteIcon,
    '_style_edit': editIcon,
    '_style_accept': acceptIcon
}

const ProjectButton: FC<ProjectButtonProps> = ({ button_type, text, onClick, button_style, img_alt }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, styles['button' + button_style])}
            type={button_type ? button_type : 'button'}
        >
            {text && <p className={styles['text-content']}>{text}</p>}

            {button_style === '_style_primary' ?
                <></>
                :
                <img src={defaultImages[button_style]} alt={img_alt} />
            }
        </button>
    )
}

export default ProjectButton