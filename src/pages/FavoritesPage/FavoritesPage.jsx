import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Home from 'resources/icon/Home';
import bindAll from 'helpers/bindAll';
import MovieList from 'components/MovieList';
import "./styles.scss";

const FavoritesPage = ({ moviesFavorites }) => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  if(!moviesFavorites.length) return (
    <section className='d-flex flex-column align-items-center'>
      <h2>Hasn't loved any movies yet.</h2>
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
      <h2 className='text-center'>My favorites</h2>
      <MovieList
        movies={moviesFavorites}
        status="favorites"
      />
    </section>   
  )
}

const mapStateToProps = ({ appReducer }) => ({
  moviesFavorites: appReducer?.moviesFavorites ?? [],
});

const mapDispatchToProps = bindAll({  });

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);