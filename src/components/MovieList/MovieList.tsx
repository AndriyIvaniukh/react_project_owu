import React, {FC, useEffect} from 'react';


import {useAppDispatch, useAppSelector} from "../../hook";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";

import css from './movieList.module.css';
import {Outlet} from "react-router-dom";

const MovieList: FC = () => {

    const dispatch = useAppDispatch();
    const {movieRequest} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getAll());
    }, [dispatch])

    return (
        <div className={css.cards}>
            {movieRequest.results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieList};