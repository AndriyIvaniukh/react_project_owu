import React, {FC} from 'react';


import {IMovie} from "../../interfaces";
import {imgURL} from "../../constants";

import css from './movieListCard.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {title, vote_average,poster_path,overview} = movie;

    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate('/movieDetails', {state:movie})}>
            <h3>{title}</h3>
            <img src={`${imgURL}${poster_path}`} alt="poster"/>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
    );
};

export {MovieListCard};