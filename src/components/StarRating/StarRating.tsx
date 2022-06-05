import React, {FC, useState} from 'react';
import { Rating } from '@mui/material';

interface IProps{
    id?: number
    rates: number
    readOnly?: boolean
}

const StarRating: FC<IProps> = ({id, rates, readOnly}) => {

    const [rating, setRating] = useState<number|null>(null);
    const setYourRating = (event: React.SyntheticEvent, value: number | null)=> {
        if (value && id){
            setRating (value*2);
            // movieService.setYourRating(id.toString(), yourRating).then(({data}) => console.log(data))
        }
    }

    const rate: number = rates/2;
    return (
        <div>
            <Rating name="half-rating" defaultValue={rate} precision={0.5} onChange={setYourRating} readOnly={readOnly}/>
            {rating && <div>Your rate : {rating}</div>}
        </div>
    );
};

export {StarRating};