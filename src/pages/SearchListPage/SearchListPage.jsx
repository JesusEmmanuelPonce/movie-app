import { connect } from 'react-redux';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import bindAll from 'helpers/bindAll';
import MovieList from 'components/MovieList';
import MoviesServices from 'store/services/MoviesServices';
import Home from 'resources/icon/Home';

const SearchListPage = ({ moviesServices, moviesWanted }) => {

  const { search } = useParams();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  useEffect(() => {

    const onSearchMovie = () => {
      moviesServices.searchMovies(search);
    }

    onSearchMovie();

  // eslint-disable-next-line
  }, [search]);

  if(!moviesWanted.length) return (
    <section className='d-flex flex-column align-items-center'>
      <h2>No movie found</h2>
      <div>
        <button
          className='btn btn-dark w-10 goToHomeBtn'
          onClick={goToHome}
        >Go to home <Home /></button>
      </div>
    </section>
  )

  return (
    <section>
      <MovieList movies={moviesWanted} />
    </section>   
  )
}

const mapStateToProps = ({ appReducer }) => ({
  moviesWanted: appReducer?.moviesWanted ?? [],
});

const mapDispatchToProps = bindAll({ MoviesServices });

export default connect(mapStateToProps, mapDispatchToProps)(SearchListPage);