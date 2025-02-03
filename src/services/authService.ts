import {axiosInstance} from "./axiosService.ts";
import {ILoginUserResponse} from "../interfaces/LoginUserResponse.ts";
import { IAuth } from "../interfaces/authInterface.ts";


export const login = async (auth:IAuth):Promise<ILoginUserResponse> => {
    const {data} = await axiosInstance.post<ILoginUserResponse>('auth/login', auth);
    localStorage.setItem("user", JSON.stringify(data))
    return data;
}
