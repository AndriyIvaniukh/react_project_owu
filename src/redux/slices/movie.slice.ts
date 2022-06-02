import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieRequest} from "../../interfaces";
import {movieService} from "../../services";
import {IQuery} from "../../interfaces/queryParams.interface";
import {IMovieSearch} from "../../interfaces/movieSearch.interface";

interface IState {
    movieRequest: IMovieRequest
    movieDetails?: IMovie
    genresFilter?: number[]
    queryParams?: IQuery
    searchFilm?:  null | string
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
    searchFilm: null
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
        addGenres: (state: IState, action): void => {
            const genres = action.payload.id as number;
            state.genresFilter?.push(genres);
        },
        deleteGenresById: (state, action): void => {
            const elIndex = state.genresFilter?.findIndex((ell) => ell === action.payload.id) as number;
            state.genresFilter?.splice(elIndex, 1)
        },
        deleteAllGenres: (state) => {
            state.genresFilter = [];
        },
        saveQueryParams: (state: IState, action) => {
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
        },
        addSearchFilm: (state, action) => {
            state.searchFilm = action.payload;
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movieRequest = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movieRequest = action.payload;
            })
            .addCase(getTopRated.fulfilled, (state, action) => {
                state.movieRequest = action.payload
            })
            .addCase(getLatest.fulfilled, (state, action) => {
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
        addSearchFilm
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
    getLatest
}

export {
    movieReducer,
    movieActions
}