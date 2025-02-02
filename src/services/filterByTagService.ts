import { IRecipesResponse } from "../interfaces/recipesResponse";
import {axiosInstance} from "./axiosService.ts";

export const loadFilterByTag = async (tag: string):Promise<IRecipesResponse> => {
    return  await axiosInstance.get(`auth/recipes/tag/` + tag).then(res => res.data);
}