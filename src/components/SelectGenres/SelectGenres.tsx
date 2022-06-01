import React, {FC, useEffect, useState} from 'react';


import css from './selectGenres.module.css'
import {useAppDispatch, useAppSelector} from "../../hook";
import {Genre} from "../Genre/Genre";
import {genderActions, movieActions} from "../../redux";

interface IProps{
    setChanged: (props:boolean)=>void
}

const SelectGenres: FC<IProps> = ({setChanged}) => {

    const {genreRequest} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();
    const [isClear, setIsClear] = useState(false);
    const {genres} = genreRequest;


    useEffect(() => {
        dispatch(genderActions.getAll());
    }, [isClear])

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
            <button onClick={clearGenresFilter}>clear All</button>
        </div>
    );
};

export {SelectGenres};