import React, {FC} from 'react';


import {IMovie} from "../../interfaces";
import {imgURL, noImage} from "../../constants";

import css from './movieListCard.module.css'
import {useLocation, useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}


const MovieListCard: FC<IProps> = ({movie}) => {

    const {title, vote_average,poster_path,overview,id} = movie;

    const {pathname} = useLocation();
    const navigate = useNavigate();

    if (!poster_path){
        console.log("none poster")
    }

    return (
        <div className={css.card} onClick={() => navigate(`${id}`, {state:{pathname, movie}})}>
            <h3>{title}</h3>
            <img src={poster_path ? `${imgURL}${poster_path}` : noImage} alt="poster"/>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
    );
};

export {MovieListCard};