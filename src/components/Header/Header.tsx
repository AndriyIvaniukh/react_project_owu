import React, {FC} from 'react';


import css from './header.module.css'
import {useNavigate} from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate();
    return (
        <div className={css.head}>
            <div style={{display: "flex", justifyContent: "center", alignItems: 'center', columnGap: '25px'}}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt=""/>
                <p onClick={() => navigate("/")}>Film</p>
                <p>Best Rates</p>
                <p>Newest</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export {Header};