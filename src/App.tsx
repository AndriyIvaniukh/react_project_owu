import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePages} from "./pages";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {useAppSelector} from "./hook";

import css from './app.module.css';

const App: FC = () => {

    const {darkMode} = useAppSelector(state => state.themeReducer);

    return (
        <div className={darkMode?css.pageNight: css.pageDay}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>
                    <Route path={'movies'} element={<MoviePages/>}></Route>
                    <Route path={'bestFilms'} element={<MoviePages/>}></Route>
                    <Route path={'nowInCinemas'} element={<MoviePages/>}></Route>
                    <Route path={':path/:id'} element={<MovieDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};

