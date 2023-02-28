import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';

import "./styles.scss";

const SearchInput = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const goToMovieWanted = () => {
        navigate(`/${search}`)
    }

    const goToFavorites = () => {
        navigate('/favorites');
    }

    return (
        <section className='searchInput container'>
            <InputGroup className='searchInput__group' style={{ maxWidth: "20rem", marginRight: ".2rem" }}>
                <Form.Control
                    placeholder="Search movie"
                    onChange={({ target: { value } }) => setSearch(value)}
                />
                <Button
                    variant="outline-secondary"
                    onClick={goToMovieWanted}
                >
                    Buscar
                </Button>
            </InputGroup>
            <button
                type='button'
                className='btn btn-success'
                onClick={goToFavorites}
            >
                My favorites
            </button>
        </section>
    )
}

export default SearchInput;