import React, {FC, useEffect, useState} from 'react';

import {IGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hook";
import {movieActions} from "../../redux";

import css from './genre.module.css';

interface IProps {
    genre: IGenre
    isClear: boolean,
    setIsClear: (params: boolean)=>void
    setChanged: (params: boolean)=>void
}

const Genre : FC<IProps> = ({genre,isClear,setIsClear,setChanged}) => {
    const {id,name} = genre;

    const dispatch = useAppDispatch();
    const {genresFilter} = useAppSelector(state => state.movieReducer);
    const [checked,setChecked] = useState(false);

    useEffect(()=>{
        setChecked(false);
        setIsClear(false);
    }, [isClear])

    useEffect(()=>{
        genresFilter?.map(check => {
            if(check === id){
                setChecked(true);
            }
        })
    },[])

    const changeCheckbox = () => {
        setChecked(!checked);
        setChanged(true);
        dispatch(movieActions.deletePagesFromQueryParams());
        if (!checked) {
            dispatch(movieActions.addGenres({id: id}))
        }else {
            dispatch(movieActions.deleteGenresById({id: id}))
        }
    }

    return (
        <div className={css.menu}>
            <li>{name}</li>
            <input type="checkbox" checked={checked} onChange={changeCheckbox}/>
        </div>
    );
};

export {Genre};