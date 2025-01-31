import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../../interfaces/recipesInterface.ts";
import { loadFilterByTag } from "../../../services/filterByTagService.ts";

 type initialStateType = {
     recipes: IRecipe[],
     tag: string
 }
 const initialState:initialStateType = {
     tag:'',
     recipes: []
 }
 const getFilter = createAsyncThunk(
     'filterByTagSlice/getFilter',
     async (tag:string, thunkAPI) => {
         try {
             const {recipes} = await loadFilterByTag(tag);
             return thunkAPI.fulfillWithValue(recipes)
         }catch (e) {
             console.log(e);
             return thunkAPI.rejectWithValue('some error')
         }
     }
 );
export const filterByTagSlice = createSlice({
    name: 'filterByTagSlice',
    initialState: initialState,
    reducers:{
        setTag: (state, action) => {
            state.tag = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getFilter.fulfilled, (state, action) => {
            state.recipes = action.payload
        })
    }
});

 export const filterByTagSliceActions = {
     ...filterByTagSlice.actions, getFilter
 }