import React, {FC,useEffect} from 'react';
import {useSearchParams} from 'react-router-dom'

import {useAppDispatch, useAppSelector} from "../../hook";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import {IQuery} from "../../interfaces";

import css from './movieList.module.css';

interface IProps {
    changed: boolean,
    setChanged: (params: boolean) => void
}

const MovieList: FC<IProps> = ({setChanged, changed}) => {

    const {movieRequest, genresFilter, queryParams, searchFilm,nowInCinema,topRated} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const {page: currentPage, total_pages} = movieRequest;
    const genres = genresFilter?.toString() || '';

    const params = queryParams as IQuery;

    const searchParams = useSearchParams({page: params?.page || '', genres: params?.genres || ''});
    const [query, setQuery] = searchParams;

    const prevPage = (): void => {
        let page = query?.get('page') || 1;
        page = +page - 1;
        if (query.get('genres')) {
            setQuery({page: page.toString(), genres: query.get('genres') || ''});
        } else {
            setQuery({page: page.toString()});
        }
        dispatch(movieActions.saveQueryParams({queryParams: {page: page, genres: query.get('genres')}}))
    }

    const nextPage = (): void => {
        let page = query?.get('page') || 1;
        page = +page + 1;
        if (query.get('genres')) {
            setQuery({page: page.toString(), genres: query.get('genres') || ''});
        } else {
            setQuery({page: page.toString()});
        }
        dispatch(movieActions.saveQueryParams({queryParams: {page: page, genres: queryParams?.genres}}))
    }

    const setGenresQuery = (): void => {
        setQuery({genres: genres || ''});
        dispatch(movieActions.saveQueryParams({queryParams: {page: queryParams?.page, genres: genres}}))
    }

    const disablePrevButton = (): boolean => {
        if (currentPage <= 1) {
            return true
        } else return false;
    }

    const disableNextButton = (): boolean => {
        if (currentPage >= movieRequest.total_pages) {
            return true
        } else return false
    }

    useEffect(() => {
        if (changed) {
            setGenresQuery();
            setChanged(false);
        } else if (!genres.length) {
            setQuery({})
        }
    }, [changed])

    useEffect(() => {
        if(nowInCinema){
            dispatch(movieActions.getLatest({params}));
        }else if(topRated){
            dispatch(movieActions.getTopRated({params}));
        }else if(searchFilm){
            dispatch(movieActions.searchMovie({name: searchFilm, params}));
        }else{
            dispatch(movieActions.getAll(params));
        }
    }, [dispatch, searchFilm, query, nowInCinema, topRated])


    return (
        <div className={css.page}>
            <div className={css.cards}>
                {movieRequest.results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.button}>
                <button disabled={disablePrevButton()} onClick={() => prevPage()}>prev</button>
                <div style={{display: "flex"}}>
                    <h2>{currentPage} of {total_pages}</h2>
                </div>
                <button disabled={disableNextButton()} onClick={() => nextPage()}>next</button>
            </div>
        </div>
    );
};

export {MovieList};