import React, {FC} from 'react';

import {MovieList} from "../../components";
import {SelectGenres} from "../../components/SelectGenres";
import {Outlet} from "react-router-dom";

import css from './moviePage.module.css';

const MoviePages : FC = () => {
    return (
        <div className={css.page}>
            <SelectGenres/>
            <MovieList/>
            <Outlet/>
        </div>
    );
};

export {MoviePages};