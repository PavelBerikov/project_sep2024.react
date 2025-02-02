import axios from "axios";
import {retriveLocalStorage} from "./helpers/retrive.ts";
import { ILoginUserResponse } from "../interfaces/LoginUserResponse.ts";

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {}
});
axiosInstance.interceptors.request.use((value) => {
    if (localStorage.getItem('user')) {
        if (value.method?.toUpperCase() === 'GET') {
            value.headers.Authorization = `Bearer `+ retriveLocalStorage<ILoginUserResponse>('user').accessToken
        }
    }
    return value;
})
// export const refresh = async ()=> {
//     const iUserWithTokens = retriveLocalStorage<ILoginUserResponse>('user');
//     const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokens>('auth/refresh', {
//         refreshToken: retriveLocalStorage<ILoginUserResponse>('user').refreshToken,
//         expiresInMin: 1
//     });
//     console.log(refreshToken)
//     console.log(accessToken)
//     iUserWithTokens.accessToken = accessToken;
//     iUserWithTokens.refreshToken = refreshToken;
//     localStorage.setItem("user", JSON.stringify(iUserWithTokens));
// }
