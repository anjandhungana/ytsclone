import axios from "axios";
import { BaseURL } from "../config/baseURL";

// axios.defaults.baseURL = BaseURL;

export const APIGetTopMovies = () =>{
   return axios.get(BaseURL+'list_movies.json')
}

export const APIGetMovieDetails = (id) =>{
    return axios.get(BaseURL + 'movie_details.json?movie_id=' + id)
}

export const APIGetSearchMovieDetails = (keyword) =>{
    return axios.get(BaseURL+'list_movies.json?query_term='+keyword)
}