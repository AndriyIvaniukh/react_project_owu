import React, {FC} from 'react';
import { Rating } from '@mui/material';

interface IProps{
    rates: number
}

const StarRating: FC<IProps> = ({rates}) => {

    const setYourRating = (event: React.SyntheticEvent, value: number | null) => {
        console.log(value);
    }

    const rate: number = rates/2;
    return (
        <div>
            <Rating name="half-rating" defaultValue={rate} precision={0.5} onChange={setYourRating}/>
        </div>
    );
};

export {StarRating};