import {createSlice} from "@reduxjs/toolkit";

interface IState {
    darkMode : boolean
}

const initialState: IState = {
    darkMode: false
};
const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: (state:IState) => {
            state.darkMode = !state.darkMode;
        }
    }
});

const {reducer: themeReducer, actions: {changeTheme}} = themeSlice;


const themeAction= {
    changeTheme
}

export {
    themeAction,
    themeReducer
}

