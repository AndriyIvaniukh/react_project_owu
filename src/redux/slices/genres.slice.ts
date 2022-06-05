import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IGenresRequest} from "../../interfaces";

interface IState {
    genreRequest: IGenresRequest
}

const initialState: IState = {
    genreRequest: {
        genres : []
    },
};

const getAll = createAsyncThunk<IGenresRequest, void>(
    'genresSlice/getAll',
    async () => {
        const {data} = await movieService.getAllGenres();
        return data;
    }
);

const genresSlice = createSlice({
    name: 'genderSLice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state: IState, action) => {
                state.genreRequest = action.payload;
            })
    }
});

const {reducer: genresReducer} = genresSlice;

const genderActions = {
    getAll
}

export {
    genresReducer,
    genderActions
}