import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {IGenresRequest} from "../../interfaces/genresRequest.interface";

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
            .addCase(getAll.fulfilled, (state, action) => {
                state.genreRequest = action.payload;
            })
    }
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genderActions = {
    getAll
}

export {
    genresReducer,
    genderActions
}