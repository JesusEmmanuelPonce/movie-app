import { DELETE_MOVIE_FAVORITE, SET_MOVIES, SET_MOVIES_WANTED, SET_MOVIE_FAVORITE, SET_SEARCH } from "../types";

const initialState = {
    search: "",
    movies: [],
    moviesWanted: [],
    moviesFavorites: []
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:

            return {
                ...state,
                movies: action?.payload,
            }

        case SET_SEARCH:

            return {
                ...state,
                search: action?.payload,
            }

        case SET_MOVIES_WANTED: 
            return {
                ...state,
                moviesWanted: action?.payload,
            }
        
        case SET_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: [
                    ...state.moviesFavorites,
                    action?.payload
                ]
            }

        case DELETE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(item => item?.id !== action?.payload)
            }
    
        default:
            return state;
    }
};

export default appReducer