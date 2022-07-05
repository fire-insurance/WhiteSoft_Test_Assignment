import { FC, useEffect } from "react"
import { RatingSelectorOption } from "../../assets/interfaces/RatingSelectorOption"
import StarsRating from "../StarsRating/StarsRating"
import Selector from "./Selector"

const default_option: RatingSelectorOption = {
    value: 'all',
    option: <p>Все</p>
}

const selector_stars: number[] = [1, 2, 3, 4, 5]

interface RatingSelectorProps {
    onChoice(rate: number | string): any,
    hasAllOption?: boolean,
    defaultValueIndex?: number,
    title?: string,
    smallStars?: boolean
}

const RatingSelector: FC<RatingSelectorProps> = ({ onChoice, hasAllOption = true, defaultValueIndex = 0, title, smallStars }) => {

    const selector_options: RatingSelectorOption[] =
        selector_stars.map((element) => {
            return {
                value: element,
                option: <StarsRating rate={element} smallStars={smallStars} />
            }
        })

    if (hasAllOption) selector_options.unshift(default_option)

    return (
        <Selector
            title={title ?? ""}
            defaultValue={selector_options[defaultValueIndex]}
            options={selector_options}
            onChoice={onChoice}
        />
    )
}

export default RatingSelector