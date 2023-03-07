import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import bindAll from 'helpers/bindAll';
import MovieList from 'components/MovieList';
import MoviesServices from 'store/services/MoviesServices';

const TvPage = ({ tvsWanted, moviesServices }) => {

    const { search } = useParams();

    useEffect(() => {

        const onSearchTvs = () => {
          moviesServices.searchTVs(search);
        }
    
        onSearchTvs();
    
    // eslint-disable-next-line
    }, [search]);

    return (
        <main>
            <MovieList movies={tvsWanted} />
        </main>
    )
}

const mapStateToProps = ({ tvReducer }) => ({
    tvsWanted: tvReducer?.tvsWanted ?? [],
});

const mapDispatchToProps = bindAll({ MoviesServices });

export default connect(mapStateToProps, mapDispatchToProps)(TvPage);
