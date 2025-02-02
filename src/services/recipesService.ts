import { IRecipe } from "../interfaces/recipesInterface.ts";
import { IRecipesResponse } from "../interfaces/recipesResponse.ts";
import {axiosInstance} from "./axiosService.ts";

export const loadRecipes =async (limit = 20, skip = 0):Promise<IRecipesResponse> => {
    return  await axiosInstance.get<IRecipesResponse>(`auth/recipes?limit=${limit}&skip=${skip}`).then(response => response.data);
}

export const loadRecipeByID = async (id: string):Promise<IRecipe | null> => {
     return  await axiosInstance.get<IRecipe>('auth/recipes/'+id).then(response => response.data);

}

export const loadSearchRecipes = async (value: string):Promise<IRecipesResponse> => {
    const recipes = await axiosInstance.get<IRecipesResponse>(`auth/recipes/search?q=${value}`).then(data => data.data);
    console.log(recipes);
    return recipes;
}