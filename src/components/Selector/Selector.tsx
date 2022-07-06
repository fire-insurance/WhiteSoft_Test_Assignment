import cn from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import { RatingSelectorOption } from '../../assets/interfaces/RatingSelectorOption';
import styles from './Selector.module.scss'
import arrowIcon from '../../assets/img/arrow.svg'

interface SelectorProps {
    title: string,
    defaultValue: RatingSelectorOption,
    options: RatingSelectorOption[],
    onChoice(value: any): any,
}

const Selector: FC<SelectorProps> = ({ title, defaultValue, options, onChoice }) => {

    const [optionsOpened, setOptionsOpened] = useState<boolean>(false)
    const toggleOptionsMenu = () => setOptionsOpened(prevState => !prevState)
    const closeOptionsMenu = () => setOptionsOpened(false)

    const [selectedValue, setSelectedValue] = useState<ReactNode>(defaultValue.option)

    const handleOptionClick = (option: RatingSelectorOption) => {
        return () => {
            setSelectedValue(option.option)
            closeOptionsMenu()
            onChoice(option.value)
        }
    }

    return (

        <div
            tabIndex={1}
          
            className={cn(styles.selector,
                { [styles['selector_options-menu-opened']]: optionsOpened })}
        >
            <div
                className={styles['selector__selected-value']}
                onClick={toggleOptionsMenu}
            >
                {title && <span>{title}</span>}
                {selectedValue}
                <img className={styles['arrow-icon']} src={arrowIcon} alt="" />
            </div>

            <div className={styles.selector__options}>
                {options.map((option_element) =>
                    <button
                        className={styles['option-button']}
                        type='button'
                        onClick={handleOptionClick(option_element)}
                        key={option_element.value}
                    >
                        {option_element.option}
                    </button>
                )}
            </div>
        </div>



    )
}

export default Selector;