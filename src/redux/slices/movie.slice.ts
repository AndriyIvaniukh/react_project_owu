import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieRequest} from "../../interfaces";
import {movieService} from "../../services";
import {IQuery} from "../../interfaces/queryParams.interface";

interface IState {
    movieRequest: IMovieRequest
    movieDetails?: IMovie
    genresFilter?: number[]
    queryParams?: IQuery
}

const initialState: IState = {
    movieRequest: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    genresFilter: [],
    queryParams: {}
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


    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movieRequest = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })

    }
});

const {reducer: movieReducer, actions: {deleteAllGenres, addGenres, deleteGenresById,saveQueryParams,deleteQueryParams,deletePagesFromQueryParams}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    deleteAllGenres,
    addGenres,
    deleteGenresById,
    saveQueryParams,
    deleteQueryParams,
    deletePagesFromQueryParams

}

export {
    movieReducer,
    movieActions
}