import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hook";
import {Genre} from "../Genre";
import {genderActions, movieActions} from "../../redux";

import css from './selectGenres.module.css'

interface IProps{
    setChanged: (props:boolean)=>void
}

const SelectGenres: FC<IProps> = ({setChanged}) => {

    const {genreRequest} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();
    const [isClear, setIsClear] = useState<boolean>(false);
    const {genres} = genreRequest;


    useEffect(() => {
        dispatch(genderActions.getAll());
    }, [isClear, dispatch])

    const clearGenresFilter = () => {
        dispatch(movieActions.deleteAllGenres());
        dispatch(movieActions.deleteQueryParams());
        setChanged(true);
        setIsClear(true);
    }

    return (
        <div className={css.genres}>
            <ul>
                {genres && genres.map(genre =>
                    <Genre key={genre.id} genre={genre} isClear={isClear} setIsClear={setIsClear} setChanged={setChanged} />)}
            </ul>
            <button className={css.button} onClick={clearGenresFilter}>Clear All</button>
        </div>
    );
};

export {SelectGenres};