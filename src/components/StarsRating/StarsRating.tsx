import { FC } from "react";
import styles from "./StarsRating.module.scss"
import starImg from '../../assets/img/star.svg'
import cn from 'classnames'

interface StarsRatingProps {
    rate: number,
    smallStars?: boolean
}

const StarsRating: FC<StarsRatingProps> = ({ rate, smallStars = false }) => {

    const starsTemplate = [1, 2, 3, 4, 5]

    return (
        <div className={styles['stars-container']} title={`Оценка ${rate} из 5`}>
            {starsTemplate.map((star, index) =>
                <img
                    key={star}
                    src={starImg}
                    alt="звездочка"
                    className={cn(styles.star, { [styles['star_filled']]: index < rate },
                        { [styles['star_small']]: smallStars })}
                />
            )}
        </div>
    )
}

export default StarsRating;