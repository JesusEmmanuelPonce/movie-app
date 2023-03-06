import axiosClient from "helpers/axiosClient";

import TvActions from "store/actions/TvActions";
import MoviesAction from "store/actions/MoviesAction";

const getMovies = () => async (dispatch) => {

    try {

        const { data } = await axiosClient.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        
        if(data) {
            dispatch(MoviesAction.setMovies(data?.results));
        }
        
    } catch (err) {
        console.log(err);
    }
}

const getTVs = () => async (dispatch) => {

    try {

        const { data } = await axiosClient.get(`/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        
        if(data) {
            dispatch(TvActions.setTv(data?.results));
        }
        
    } catch (err) {
        console.log(err);
    }
}

const searchMovies = movie => async(dispatch) => {
    try {
        
        const { data } = await axiosClient.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`);

        if(data) {
            dispatch(MoviesAction.setMoviesWanted(data?.results));
        }

    } catch (err) {
        console.log(err);
    }
}

const MoviesServices = {
    getTVs,
    getMovies,
    searchMovies,
};

export default MoviesServices;