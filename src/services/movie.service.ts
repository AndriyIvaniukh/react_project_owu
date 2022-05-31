import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IMovie, IMovieRequest} from "../interfaces";

const movieService = {
    getAllMovies: ():Res<IMovieRequest> => axiosService.get(urls.movies),
    getMovieById: (id: string): Res<IMovie> => axiosService.get(`${urls.movie}/${id}`),
    getAllGenres: ():Res<IGenre[]> => axiosService.get(urls.genres),
}


export {
    movieService
}