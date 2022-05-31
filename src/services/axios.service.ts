import axios, {AxiosResponse} from "axios";
import {apiToken, baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    const token = apiToken;
    if (token){
        config.headers = {'Authorization':  `Bearer ${token}`};
    }else{
        console.log('something wrong with your access token');
    }
    return config;
})

export type Res<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
}