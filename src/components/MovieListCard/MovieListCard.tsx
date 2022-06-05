import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {imgURL, noImage} from "../../constants";
import {StarRating} from "../StarRating";

import css from './movieListCard.module.css';

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {title, vote_average, poster_path, id} = movie;

    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate(`${pathname}/${id}`, {state: {pathname, movie}})}>
            <div>
                <img src={poster_path ? `${imgURL}${poster_path}` : noImage} alt="poster"/>
            </div>
            <div className={css.title}>{title}</div>
            <div className={css.vote_average}>
                <StarRating rates={vote_average || 0} readOnly={false}/>
            </div>
        </div>
    );
};

export {MovieListCard};