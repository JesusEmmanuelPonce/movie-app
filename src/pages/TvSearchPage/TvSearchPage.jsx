import { connect } from 'react-redux';

import bindAll from 'helpers/bindAll';
import MovieList from 'components/MovieList';
import MoviesServices from 'store/services/MoviesServices';

const TvPage = ({ tvs }) => {

    return (
        <main>
            <MovieList movies={tvs} />
        </main>
    )
}

const mapStateToProps = ({ tvReducer }) => ({
    tvs: tvReducer?.tv ?? [],
});

const mapDispatchToProps = bindAll({ MoviesServices });

export default connect(mapStateToProps, mapDispatchToProps)(TvPage);
