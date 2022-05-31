import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import {IMovie} from "../../interfaces";

interface ILocation {
    pathname: string
    state: IMovie
    search: string
    hash: string
    key: string
}

const MovieDetailsPage: FC = () => {

    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            MovieDetailsPage
        </div>
    );
};

export {MovieDetailsPage};