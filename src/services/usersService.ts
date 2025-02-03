import { IUser } from "../interfaces/userInterface.ts";
import { IUsersResponse } from "../interfaces/usersResponseInterface.ts";
import {axiosInstance} from "./axiosService.ts";

export const loadUsers = async (limit = 20, skip = 0):Promise<IUsersResponse> => {
    return  await axiosInstance.get<IUsersResponse>(`auth/users?limit=${limit}&skip=${skip}`).then((response) => response.data);

}
export const loadUser = async (id: string):Promise<IUser> => {
    return await axiosInstance.get<IUser>('auth/users/'+id).then(response => response.data);

}
export const loadSearchUser = async (value: string):Promise<IUsersResponse> => {
    return  await axiosInstance.get<IUsersResponse>(`auth/users/search?q=${value}`).then(data => data.data);

}