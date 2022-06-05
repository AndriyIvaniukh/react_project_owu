import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer, themeReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    genresReducer,
    themeReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}