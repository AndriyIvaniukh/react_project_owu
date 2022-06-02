import React, {FC, useState} from 'react';
import {Outlet} from "react-router-dom";

import {MovieList} from "../../components";
import {SelectGenres} from "../../components";
import {useAppSelector} from "../../hook";

import css from './moviePage.module.css';

const MoviePages: FC = () => {

    const [changed, setChanged] = useState(false);
    const {searchFilm} = useAppSelector(state => state.movieReducer);

    console.log('moviePage')

    return (
        <div className={css.page}>
            {!searchFilm && <SelectGenres setChanged={setChanged}/>}
            <MovieList setChanged={setChanged} changed={changed}/>
            <Outlet/>
        </div>
    );
};

export {MoviePages};