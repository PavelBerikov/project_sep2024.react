import {createSlice} from "@reduxjs/toolkit";


type initialStateType = {
    searchWord: string
}
const initialState: initialStateType = {
   searchWord: "",
}


export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {
        setWord: (state, action) => {
            state.searchWord = action.payload
        }
    }
});

export const searchSliceActions = {
    ...searchSlice.actions
}