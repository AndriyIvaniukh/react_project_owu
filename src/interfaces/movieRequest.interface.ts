import {IMovie} from "./movie.interface";

export interface IMovieRequest {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}