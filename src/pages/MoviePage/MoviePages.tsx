import React, {FC, useState} from 'react';
import {Outlet} from "react-router-dom";

import {MovieList, SelectGenres} from "../../components";
import {useAppSelector} from "../../hook";

import css from './moviePage.module.css';

const MoviePages: FC = () => {

    const [changed, setChanged] = useState<boolean>(false);
    const {searchFilm, topRated,nowInCinema} = useAppSelector(state => state.movieReducer);

    return (
        <div className={css.page}>
            {!searchFilm && !topRated && !nowInCinema && <SelectGenres setChanged={setChanged}/>}
            <MovieList setChanged={setChanged} changed={changed}/>
            <Outlet/>
        </div>
    );
};

export {MoviePages};