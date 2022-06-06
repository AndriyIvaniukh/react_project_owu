import React, {FC, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePages} from "./pages";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

import css from './app.module.css';

const App: FC = () => {

    const [nightMode,setNightMode] = useState<boolean>(false)

    return (
        <div className={nightMode?css.pageNight: css.pageDay}>
            <Routes>
                <Route path={'/'} element={<MainLayout nightTheme={{nightMode,setNightMode}}/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>
                    <Route path={'movies'} element={<MoviePages />}></Route>
                    <Route path={'bestFilms'} element={<MoviePages/>}></Route>
                    <Route path={'nowInCinemas'} element={<MoviePages/>}></Route>
                    <Route path={':path/:id'} element={<MovieDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};

