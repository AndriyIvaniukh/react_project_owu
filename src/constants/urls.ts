const baseURL = process.env.REACT_APP_API;
const apiToken = process.env.REACT_APP_API_TOKEN;
const imgURL = process.env.REACT_APP_API_IMG;
const noImage = 'https://sd.keepcalms.com/i/keep-calm-but-sorry-no-poster.png';

const urls ={
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    movie: '/movie'
}

export {
    baseURL,
    apiToken,
    imgURL,
    urls,
    noImage
}