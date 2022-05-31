import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IMovieRequest} from "../interfaces";

const movieService = {
    getAllMovies: ():Res<IMovieRequest> => axiosService.get(urls.movies),
    getAllGenres: ():Res<IGenre[]> => axiosService.get(urls.genres),
}


export {
    movieService
}