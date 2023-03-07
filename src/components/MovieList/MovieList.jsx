import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Star from 'resources/icon/Star';
import Trash from 'resources/icon/Trash';
import bindAll from 'helpers/bindAll';
import NoImage from "resources/images/no-image.jpeg"
import isValidArr from 'helpers/isValidArr';
import MoviesAction from 'store/actions/MoviesAction';
import "./styles.scss";

const MovieList = ({ movies, moviesFavorites, moviesAction, status = "" }) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to favorites
        </Tooltip>
    );

    const deleteTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete favorite
        </Tooltip>
    );

    const addToFavorites = id => {
        const movieSelected = movies.find(movie => movie.id === id);

        const isMovieFavorite = moviesFavorites.find(movie => movie?.id === movieSelected?.id);

        if(isMovieFavorite === undefined) {
            moviesAction.setMovieFavorite(movieSelected);
        }

    };

    const removeFromFavorites = id => {
        moviesAction.deleteMovieFavorite(id);
    };

    const verifyIsFavorite = id => {

        const movieSelected = isValidArr(moviesFavorites) && moviesFavorites.find(movie => movie.id === id);

        return movieSelected
    }

    return (
        <section className='container movieList'>
            <div className="row">
                {isValidArr(movies) && movies.map(movie => (
                    <div key={movie?.id} className='p-3 col-lg-4 col-md-6'>
                        <Card>
                            <Card.Img variant="top" src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` : NoImage } />
                            <Card.Body>
                                <Card.Title>{ movie?.title ? movie?.title : movie?.name }
                                {status === "" ? verifyIsFavorite(movie?.id) ?
                                    ( <p><Star className='activeFavorite' /> </p> ) :
                                    ( <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <button
                                            className='movieList__btn'
                                            onClick={() => addToFavorites(movie?.id)}
                                        >
                                            <Star />
                                        </button> 
                                    </OverlayTrigger> ) :
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={deleteTooltip}
                                    >
                                        <button
                                            className='movieList__btnTrash'
                                            onClick={() => removeFromFavorites(movie?.id)}
                                        >
                                            <Trash />
                                        </button> 
                                    </OverlayTrigger>
                                }

                                </Card.Title>
                                <Card.Text>{ movie?.overview ? movie?.overview : "No description" }</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </section>   
    )
}

const mapStateToProps = ({ appReducer }) => ({
    moviesFavorites: appReducer?.moviesFavorites ?? [],
})
  
const mapDispatchToProps = bindAll({ MoviesAction });

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
