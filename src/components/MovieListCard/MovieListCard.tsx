import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {imgURL, noImage} from "../../constants";

import css from './movieListCard.module.css';
import {useAppSelector} from "../../hook";
import {StarRating} from "../StarRating/StarRating";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {title, vote_average, poster_path, overview, id, genre_ids} = movie;
    // const {genreRequest: {genres}} = useAppSelector(state => state.genresReducer);

    const {pathname} = useLocation();
    const navigate = useNavigate();

    // const findGenreById = (id: number): string[] => {
    //     const movieGenreArr : string[] = [];
    //     genre_ids?.map(el=> genres.find(genre => {
    //         if(genre.id === el){
    //             movieGenreArr.push(genre.name);
    //         }
    //     }))
    //     return movieGenreArr;
    // }
    //
    // const currentMovieGenresNames: string[] = findGenreById(id);

    return (
        <div className={css.card}>
            <div onClick={() => navigate(`${id}`, {state: {pathname, movie}})}>
                <img src={poster_path ? `${imgURL}${poster_path}` : noImage} alt="poster"/>
            </div>
            <div className={css.title}>{title}</div>
            {/*<div className={css.genres}>*/}
               {/*{currentMovieGenresNames.map(el=> <div>{el}</div>)}*/}
            {/*</div>*/}
            <div className={css.vote_average}>
                <StarRating rates={vote_average || 0}/>
            </div>
        </div>
    );
};

export {MovieListCard};