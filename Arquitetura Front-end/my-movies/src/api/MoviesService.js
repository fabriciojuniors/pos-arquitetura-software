import axios from "axios";

const API_KEY = '8368bc09f0b0c47907aa07f6b27fac46';
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

}