import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import { IRecipe } from "../../../interfaces/recipesInterface";
import {loadPromoRecipes, loadRecipeByID, loadRecipes, loadSearchRecipes} from "../../../services/recipesService.ts";
import {IRecipesResponse} from "../../../interfaces/recipesResponse.ts";

type initialStateType = {
    recipes: IRecipe[],
    recipe: IRecipe | null,
    id:number | null,
    responseRecipe: IRecipesResponse | null,
}
const initialState:initialStateType = {
    recipes: [],
    recipe: null,
    id:null,
    responseRecipe: null,
};
const getPromoRecipes = createAsyncThunk(
    'recipes/getPromoRecipes',
    async ({ limit, skip }: { limit: number; skip: number }, thunkAPI) => {
        try {
            const recipes = await loadPromoRecipes(limit, skip)
            return thunkAPI.fulfillWithValue(recipes)
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
const getRecipes = createAsyncThunk(
    'recipesSlice/getRecipes',
    async ({ limit, skip }: { limit: number; skip: number }, thunkAPI) => {
        try {
            const recipes = await loadRecipes(limit, skip)
            return thunkAPI.fulfillWithValue(recipes)
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
const getRecipeById = createAsyncThunk(
    'recipesSlice/getRecipeById',
    async (id:string, thunkAPI) => {
        try {
            const response = await loadRecipeByID(id);
            return thunkAPI.fulfillWithValue(response)
        }catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
const getRecipeBySearch = createAsyncThunk(
    'recipesSlice/getRecipeBySearch',
    async (word: string, thunkAPI) => {
        try {
            const recipes = await loadSearchRecipes(word);
            return thunkAPI.fulfillWithValue(recipes)
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
export const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState: initialState,
    reducers:{
        resetRecipe: (state) => {
            state.recipe = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(getRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
            state.responseRecipe = action.payload
        })
            .addCase(getRecipeById.fulfilled, (state    , action) => {
                state.recipe = action.payload
            })
        .addCase(getRecipeBySearch.fulfilled, (state    , action) => {
            state.recipes =  action.payload.recipes
        })
            .addCase(getPromoRecipes.fulfilled, (state    , action) => {
                state.recipes = action.payload.recipes
            })
    }
});

export const recipesSliceActions = {
    ...recipesSlice.actions, getRecipes, getRecipeById, getRecipeBySearch, getPromoRecipes
}