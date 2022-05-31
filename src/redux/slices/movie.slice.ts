import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieRequest} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movieRequest: IMovieRequest
}

const initialState: IState = {
    movieRequest: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getAll = createAsyncThunk<IMovieRequest, void>(
    'movieSlice/getAll',
    async () => {
        const {data} = await movieService.getAllMovies();
        return data;
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movieRequest = action.payload;
            })

    }
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}