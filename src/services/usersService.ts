import { IUser } from "../interfaces/userInterface.ts";
import { IUsersResponse } from "../interfaces/usersResponseInterface.ts";
import {axiosInstance} from "./axiosService.ts";

export const loadUsers = async (limit = 20, skip = 0):Promise<IUsersResponse> => {
    const data = await axiosInstance.get<IUsersResponse>(`auth/users?limit=${limit}&skip=${skip}`).then((response) => response.data);
    console.log(data.users);
    return data
}
export const loadUser = async (id: string):Promise<IUser> => {
    const user = await axiosInstance.get<IUser>('auth/users/'+id).then(response => response.data);
    console.log(user)
    return  user
}
export const loadSearchUser = async (value: string):Promise<IUsersResponse> => {
    const users = await axiosInstance.get<IUsersResponse>(`auth/users/search?q=${value}`).then(data => data.data);
    console.log(users);
    return users;
}