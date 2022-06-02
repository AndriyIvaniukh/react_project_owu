import React, {FC, useRef} from 'react';
import {useAppDispatch} from "../../hook";
import {movieActions} from "../../redux";

const SearchForm: FC = () => {

    const searchKey = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch();

    const clickSearch = async () => {
        if(searchKey.current !== null){
            await dispatch(movieActions.addSearchFilm(searchKey.current.value));
            await dispatch(movieActions.searchMovie({name: searchKey.current.value}));
            searchKey.current.value = '';
        }
    }

    return (
        <div>
            <input type={'text'} placeholder={'enter name of film'} ref={searchKey}/>
            <button onClick={clickSearch}>Search</button>
        </div>
    );
};

export {SearchForm};