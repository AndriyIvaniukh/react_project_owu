import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {SearchForm} from "../SearchForm";
import {useAppDispatch} from "../../hook";
import {movieActions, themeAction} from "../../redux";
import Switch from '@mui/material/Switch';

import css from './header.module.css'
import {UserInfo} from "../UserInfo";


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
        dispatch(movieActions.topRatedPage());
        navigate('/bestFilms');
    }

    const goToLatest = () => {
        clearPreviousState();
        dispatch(movieActions.nowInCinemaPage());
        navigate('/nowInCinemas');
    }

    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = () => {
        setChecked(!checked);
        dispatch(themeAction.changeTheme())
    }

    return (
        <div className={css.head}>
            <div style={{display: "flex", justifyContent: "center", alignItems: 'center', columnGap: '25px'}}>
                <img onClick={goToFilm} src={logoImgDirection} alt="logo"/>
                <p onClick={goToFilm}>Films</p>
                <p onClick={goToBestRates}>Best Films</p>
                <p onClick={goToLatest}>Now In Cinemas</p>
            </div>
            <div className={css.rightSide}>
                <div>
                    <SearchForm/>
                </div>
                <div className={css.switcher}>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                </div>
                <div className={css.userInfo}>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {Header};