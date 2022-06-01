import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IMovie, IMovieRequest} from "../interfaces";
import {IGenresRequest} from "../interfaces/genresRequest.interface";
import {IQuery} from "../interfaces/queryParams.interface";

const movieService = {
    getAllMovies: (params: IQuery):Res<IMovieRequest> => {
        return axiosService.get(urls.movies,
            {
                params: {
                    page: params.page,
                    with_genres: params.genres
                }
            })
    },
    getMovieById: (id: string): Res<IMovie> => axiosService.get(`${urls.movie}/${id}`),
    getAllGenres: ():Res<IGenresRequest> => axiosService.get(urls.genres),
}


export {
    movieService
}