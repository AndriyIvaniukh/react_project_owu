import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IMovie, IMovieRequest} from "../interfaces";
import {IGenresRequest} from "../interfaces/genresRequest.interface";
import {IQuery} from "../interfaces/queryParams.interface";
import {IMovieSearch} from "../interfaces/movieSearch.interface";

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
    searchFilm: (params: IMovieSearch): Res<IMovieRequest> => axiosService.get(`search${urls.movie}`,{
        params:{
            query: params.name,
            page: params?.params?.page,
        }
    }),
    getTopRated: (params: IMovieSearch): Res<IMovieRequest> => axiosService.get(urls.topRated,{
        params:{
            query: params.name,
            page: params?.params?.page,
        }
    }),
    getLatest: (params: IMovieSearch): Res<IMovieRequest> => axiosService.get(urls.latest,{
        params:{
            query: params.name,
            page: params?.params?.page,
        }
    }),
}


export {
    movieService
}