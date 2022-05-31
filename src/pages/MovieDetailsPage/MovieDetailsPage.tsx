import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook";
import {movieActions} from "../../redux";
import {imgURL} from "../../constants";
import {IMovie} from "../../interfaces";

type patchNameType = {
    pathname: string
}
type movieType = {
    movie: IMovie
}

const MovieDetailsPage: FC = () => {

    const navigate = useNavigate();
    const {id} = useParams<string>();
    const location = useLocation();
    const {pathname} = location.state as patchNameType;
    const {movie} = location.state as movieType;

    const {original_title, poster_path} = movie;

    return (
        <div>
            <button onClick={() => {
                navigate(`${pathname}`)
            }}>Back
            </button>
            {original_title && <h2>{original_title}</h2>}
            {poster_path && <img src={`${imgURL}${poster_path}`} alt="poster"/>}
        </div>
    );
};
export {MovieDetailsPage};