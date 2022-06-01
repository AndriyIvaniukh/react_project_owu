import React, {FC, useState} from 'react';

import {MovieList} from "../../components";
import {SelectGenres} from "../../components/SelectGenres";
import {Outlet, useSearchParams} from "react-router-dom";

import css from './moviePage.module.css';

const MoviePages: FC = () => {

    const [changed, setChanged] = useState(false);

    console.log('moviePage')

    return (
        <div className={css.page}>
            <SelectGenres setChanged={setChanged}/>
            <MovieList setChanged={setChanged} changed={changed}/>
            <Outlet/>
        </div>
    );
};

export {MoviePages};