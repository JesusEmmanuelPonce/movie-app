import { connect } from 'react-redux';
import { useEffect } from 'react'

import bindAll from 'helpers/bindAll';
import MovieList from 'components/MovieList';
import MoviesServices from 'store/services/MoviesServices';

const Home = ({ moviesServices, movies }) => {

    useEffect(() => {
        const getAllMovies = () => {
            moviesServices.getMovies();
        };
    
        getAllMovies();
    
    // eslint-disable-next-line
    }, []);

    return (
        <main>
            {/* <SearchInput /> */}
            <MovieList movies={movies} />
        </main>
    )
}

const mapStateToProps = ({ appReducer }) => ({
    movies: appReducer?.movies ?? [],
});

const mapDispatchToProps = bindAll({ MoviesServices });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
