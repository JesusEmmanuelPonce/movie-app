import { DELETE_MOVIE_FAVORITE, SET_MOVIES, SET_MOVIES_WANTED, SET_MOVIE_FAVORITE, SET_SEARCH } from "store/types";

const setMovies = movies => ({
    type: SET_MOVIES,
    payload: movies
});

const setSearch = name => ({
    type: SET_SEARCH,
    payload: name
});

const setMoviesWanted = movies => ({
    type: SET_MOVIES_WANTED,
    payload: movies
});

const setMovieFavorite = movie => ({
    type: SET_MOVIE_FAVORITE,
    payload: movie
});

const deleteMovieFavorite = idMovie => ({
    type: DELETE_MOVIE_FAVORITE,
    payload: idMovie
});

const MoviesAction = {
    setMovies,
    setSearch,
    setMoviesWanted,
    setMovieFavorite,
    deleteMovieFavorite,
};

export default MoviesAction;