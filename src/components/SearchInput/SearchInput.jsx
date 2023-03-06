import { connect } from 'react-redux';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import bindAll from 'helpers/bindAll';
import MoviesServices from 'store/services/MoviesServices';
import "./styles.scss";

const SearchInput = ({ moviesServices }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [search, setSearch] = useState("");

    const onSearch = () => {

        console.log(pathname)

        if(pathname === "/tv") {
            moviesServices.getTVs();
            navigate(`/tv/${search}`)
        } else {
            moviesServices.getMovies();
            navigate(`/movie/${search}`)
        }

    }

    return (
        <Form className="d-flex">
            <Form.Control
                type="text"
                placeholder="Search movie"
                value={search}
                name="search"
                onChange={({ target: { value } }) => setSearch(value)}
                className="me-2"
            />
            <Button
                variant="outline-success"
                type="button"
                onClick={onSearch}
            >
                Search
            </Button>
        </Form>
    )
}

const mapDispatchToProps = bindAll({ MoviesServices });

export default connect(null, mapDispatchToProps)(SearchInput);