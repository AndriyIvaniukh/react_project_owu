import React, {FC} from 'react';

import {Outlet} from "react-router-dom";
import {Header, Footer} from "../../components";

import css from './myinLayout.module.css';

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <div className={css.wrap}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {MainLayout};