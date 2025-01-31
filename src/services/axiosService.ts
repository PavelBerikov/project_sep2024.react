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
            value.headers.Authorization = `Berear `+ retriveLocalStorage<ILoginUserResponse>('user').accessToken
        }
    }
    return value;
})

