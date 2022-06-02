import {IQuery} from "./queryParams.interface";

export interface IMovieSearch {
    params?: IQuery,
    name?: string | undefined
}