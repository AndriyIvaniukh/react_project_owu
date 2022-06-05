import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieRequest, IQuery, IMovieSearch} from "../../interfaces";
import {movieService} from "../../services";

type typeId={
    id: number
}

interface IState {
    movieRequest: IMovieRequest
    movieDetails?: IMovie
    genresFilter?: number[]
    queryParams: IQuery
    searchFilm:  null | string
    topRated: boolean
    nowInCinema: boolean
}

const initialState: IState = {
    movieRequest: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    genresFilter: [],
    queryParams: {},
    searchFilm: null,
    nowInCinema: false,
    topRated: false
};

const getAll = createAsyncThunk<IMovieRequest, IQuery>(
    'movieSlice/getAll',
    async (params) => {
        const {data} = await movieService.getAllMovies(params);
        return data;
    }
);

const getById = createAsyncThunk<IMovie, string>(
    'movieSlice/getById',
    async (id) => {
        const {data} = await movieService.getMovieById(id);
        return data;
    }
);

const searchMovie = createAsyncThunk<IMovieRequest, IMovieSearch>(
    'movieSlice/searchMovie',
    async (params: IMovieSearch) => {
        const {data} = await movieService.searchFilm(params);
        return data;
    }
);

const getTopRated = createAsyncThunk<IMovieRequest, IMovieSearch>(
    'movieSlice/getTopRated',
    async (params: IMovieSearch) => {
        const {data} = await movieService.getTopRated(params);
        return data;
    }
);

const getLatest = createAsyncThunk<IMovieRequest, IMovieSearch>(
    'movieSlice/gatLatest',
    async (params: IMovieSearch) => {
        const {data} = await movieService.getLatest(params);
        return data;
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addGenres: (state: IState, action:PayloadAction<typeId>): void => {
            const genres = action.payload.id;
            state.genresFilter?.push(genres);
        },
        deleteGenresById: (state: IState, action:PayloadAction<typeId>): void => {
            const elIndex = state.genresFilter?.findIndex((ell) => ell === action.payload.id);
            state.genresFilter?.splice(elIndex as number, 1)
        },
        deleteAllGenres: (state:IState) => {
            state.genresFilter = [];
        },
        saveQueryParams: (state: IState, action:PayloadAction<any> ) => {
            state.queryParams = action.payload.queryParams;
        },
        deleteQueryParams: state => {
            state.queryParams = {};
        },
        deletePagesFromQueryParams: state => {
            state.queryParams = {page: '1', genres: state.queryParams?.genres || ''};
        },
        clearAll: state => {
            state.genresFilter = [];
            state.queryParams = {};
            state.movieRequest = {
                page: 1,
                results: [],
                total_pages: 0,
                total_results: 0
            }
            state.searchFilm = null;
            state.nowInCinema = false;
            state.topRated = false
        },
        addSearchFilm: (state:IState, action:PayloadAction<string>) => {
            state.searchFilm = action.payload;
        },
        topRatedPage: (state:IState) => {
            state.topRated = true;
        },
        nowInCinemaPage: (state: IState) =>{
            state.nowInCinema = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state: IState, action) => {
                state.movieRequest = action.payload;
            })
            .addCase(getById.fulfilled, (state: IState, action) => {
                state.movieDetails = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state:IState, action) => {
                state.movieRequest = action.payload;
            })
            .addCase(getTopRated.fulfilled, (state:IState, action) => {
                state.movieRequest = action.payload
            })
            .addCase(getLatest.fulfilled, (state:IState, action) => {
                state.movieRequest = action.payload
            })

    }
});

const {
    reducer: movieReducer, actions: {
        deleteAllGenres,
        addGenres,
        deleteGenresById,
        saveQueryParams,
        deleteQueryParams,
        deletePagesFromQueryParams,
        clearAll,
        addSearchFilm,
        topRatedPage,
        nowInCinemaPage
    }
} = movieSlice;

const movieActions = {
    getAll,
    getById,
    deleteAllGenres,
    addGenres,
    deleteGenresById,
    saveQueryParams,
    deleteQueryParams,
    deletePagesFromQueryParams,
    clearAll,
    searchMovie,
    addSearchFilm,
    getTopRated,
    getLatest,
    topRatedPage,
    nowInCinemaPage
}

export {
    movieReducer,
    movieActions
}