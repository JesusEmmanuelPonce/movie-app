import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Star from 'resources/icon/Star';

import "./styles.scss";

const SearchInput = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [search, setSearch] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    const onSearch = () => {

        if(pathname.includes("/tv")) {
            navigate(`/tv/${search}`)
        } else {
            navigate(`/movie/${search}`)
        }

        setSearch("");

    }

    useEffect(() => {
        const onPlaceholder = () => {
            if(pathname.includes("/tv")){
                setPlaceholder("Search a tv show")
            } else {
                setPlaceholder("Search a movie")
            }
        };

        onPlaceholder();

    }, [pathname])

    return (
        <Form className="d-flex searchInput">
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                name="search"
                onChange={({ target: { value } }) => setSearch(value)}
                className="searchInput__input me-2"
            />
            <Button
                variant="outline-success"
                type="button"
                onClick={onSearch}
            >
                Search
            </Button>
            <Button
                variant="outline-warning"
                type="button"
                onClick={() => navigate("/favorites")}
                className="d-flex searchInput__favoritesBtn"
            >
                <Star />
            </Button>
        </Form>
    )
}

export default SearchInput;