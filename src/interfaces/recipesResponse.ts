import { IRecipe } from "./recipesInterface";

export interface IRecipesResponse {
    recipes: IRecipe[]
    total: number;
    skip: number;
    limit: number;
}