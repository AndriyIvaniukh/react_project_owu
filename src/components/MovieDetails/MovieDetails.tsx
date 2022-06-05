import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {IGenre, IMovie} from "../../interfaces";
import {imgURL} from "../../constants";
import {StarRating} from "../StarRating";
import {useAppSelector} from "../../hook";

import css from './movieDetails.module.css'
import backButton from '../../images/backButton/backButton.png'

type pathNameType = {
    pathname: string
}
type movieType = {
    movie: IMovie
}

const MovieDetails: FC = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {pathname} = state as pathNameType;
    const {movie} = state as movieType;
    const {
        id, genre_ids, poster_path, overview, title, vote_average,
        original_language, vote_count, release_date
    } = movie;

    const goToPage = (pathname: string): void => {
        navigate(pathname);
    }

    const {genreRequest: {genres}} = useAppSelector(state => state.genresReducer);
    const findGenreById = (id: number): string[] => {
        return findGenresById(genre_ids, genres);
    }

    const findGenresById = (ids: number[], genres: IGenre[]) : string[] =>{
        const movieGenreArr : string[] = [];
        ids.map(el=> {
            const findEl =genres.find(genre => {
                if(genre.id === el){
                   return movieGenreArr.push( ' ' + genre.name);
                }
                return null;
            })
            return findEl
        })
        return movieGenreArr
    }

    const currentMovieGenresNames: string[] = findGenreById(id);

    return (
        <div className={css.page}>
            <div className={css.button} onClick={() => goToPage(pathname)}><img src={backButton} alt={'goBack'}/></div>
            {movie && <div className={css.details_part}>
                <div>
                    <img src={`${imgURL}${poster_path}`} alt="poster"/>
                </div>
                <div className={css.aboutMovie}>
                    <h2>{title}</h2>
                    <StarRating rates={vote_average} readOnly={false} id={id}/>
                    <div><span><b>Vote count:</b> {vote_count}</span></div>
                    <br/>
                    <div><span><b>Original language:</b> {original_language}</span></div>
                    <div><span><b>Genre:</b> {currentMovieGenresNames.toString()}</span></div>
                    <div><span><b>Release date:</b> {release_date}</span></div>
                    <br/>
                    <div><span><b>About movie:</b> <br/>{overview}</span></div>
                    <br/>

                </div>

            </div>}
        </div>
    );
};

export {MovieDetails};