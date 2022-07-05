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
    onChoice(rate: number | string): any
}

const RatingSelector: FC<RatingSelectorProps> = ({ onChoice }) => {

    const selector_options: RatingSelectorOption[] =
        selector_stars.map((element) => {
            return {
                value: element,
                option: <StarsRating rate={element} />
            }
        })

    return (
        <Selector
            title="Рейтинг"
            defaultValue={default_option}
            options={[default_option].concat(selector_options)}
            onChoice={onChoice}
        />
    )
}

export default RatingSelector