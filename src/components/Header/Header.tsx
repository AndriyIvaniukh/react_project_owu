import React, {FC} from 'react';


import css from './header.module.css'
import {useNavigate} from "react-router-dom";
import {SearchForm} from "../SearchForm";
import {useAppDispatch} from "../../hook";
import {movieActions} from "../../redux";

const Header: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logoImgDirection = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";

    const clearPreviousState = () => {
        dispatch(movieActions.clearAll())
    }

    const goToFilm = () => {
        clearPreviousState();
        navigate("/");
    }

    const goToBestRates = () => {
        clearPreviousState();
        dispatch(movieActions.addSearchFilm('bestRates'));
        dispatch(movieActions.getTopRated({}));
        navigate('/');
    }

    const goToLatest = () => {
        clearPreviousState();
        dispatch(movieActions.addSearchFilm('latestFilms'));
        dispatch(movieActions.getLatest({}));
        navigate('/');
    }
    return (
        <div className={css.head}>
            <div style={{display: "flex", justifyContent: "center", alignItems: 'center', columnGap: '25px'}}>
                <img src={logoImgDirection} alt="logo"/>
                <p onClick={goToFilm}>Film</p>
                <p onClick={goToBestRates}>Best Rates</p>
                <p onClick={goToLatest}>Now In Cinemas</p>
            </div>
            <div>
                <SearchForm/>
            </div>
        </div>
    );
};

export {Header};