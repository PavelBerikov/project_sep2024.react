import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../../interfaces/recipesInterface.ts";
import { loadFilterByTag } from "../../../services/filterByTagService.ts";
import {IRecipesResponse} from "../../../interfaces/recipesResponse.ts";

 type initialStateType = {
     recipes: IRecipe[],
     tag: string,
     response: IRecipesResponse | null
 }
 const initialState:initialStateType = {
     tag:'',
     recipes: [],
     response: null
 }
 const getFilter = createAsyncThunk(
     'filterByTagSlice/getFilter',
     async (tag:string, thunkAPI) => {
         try {
             const data = await loadFilterByTag(tag);
             return thunkAPI.fulfillWithValue(data)
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
            state.response = action.payload
            state.recipes = action.payload.recipes
        })
    }
});

 export const filterByTagSliceActions = {
     ...filterByTagSlice.actions, getFilter
 }