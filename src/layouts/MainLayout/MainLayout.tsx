import React, {FC, useEffect} from 'react';

import {Outlet} from "react-router-dom";
import {Header} from "../../components";

import css from './myinLayout.module.css'

const MainLayout: FC = () => {

    return (
        <div>
            <Header/>
            <div className={css.wrap}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};