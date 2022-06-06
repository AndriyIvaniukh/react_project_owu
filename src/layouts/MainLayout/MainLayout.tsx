import React, {FC} from 'react';

import {Outlet} from "react-router-dom";
import {Header, Footer} from "../../components";

import css from './myinLayout.module.css';

interface IState{
    nightTheme: {
        nightMode: boolean,
        setNightMode: (nightMode: boolean) => void
    }
}

const MainLayout: FC<IState> = ({nightTheme}) => {
    return (
        <div>
            <Header nightTheme={nightTheme}/>
            <div className={css.wrap}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {MainLayout};
