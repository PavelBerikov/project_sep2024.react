import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "../slices/authSlice/authSlice.ts";
import {usersSlice} from "../slices/usersSlice/usersSlice.ts";
import {recipesSlice} from "../slices/recipesSlice/recipesSlice.ts";
import {searchSlice} from "../slices/searchSlice/searchSlice.ts";
import {filterByTagSlice} from "../slices/filterByTagSlice/filterByTagSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        usersSlice: usersSlice.reducer,
        recipeSlice: recipesSlice.reducer,
        searchSlice: searchSlice.reducer,
        filterByTagSlice: filterByTagSlice.reducer
    }
});