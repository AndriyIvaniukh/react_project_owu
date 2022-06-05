import React, {FC, useRef} from 'react';
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import {useAppDispatch} from "../../hook";

import css from './searchForm.module.css';
import logo from '../../images/search/img.png';

const SearchForm: FC = () => {

    const searchKey = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const clickSearch = async () => {
        if(searchKey.current !== null){
            await dispatch(movieActions.clearAll());
            await dispatch(movieActions.addSearchFilm(searchKey.current.value));
            await dispatch(movieActions.searchMovie({name: searchKey.current.value}));
            searchKey.current.value = '';
            navigate('/');
        }
    }

    return (
        <div className={css.searchForm}>
            <input type={'text'} placeholder={' Search for films ...'} ref={searchKey}/>
            <button className={css.searchButton} onClick={clickSearch}><img src={logo} alt={'search'}/></button>
        </div>
    );
};

export {SearchForm};