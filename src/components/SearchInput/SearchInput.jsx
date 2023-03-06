import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import bindAll from 'helpers/bindAll';
import MoviesAction from 'store/actions/MoviesAction';
import "./styles.scss";

const SearchInput = ({ moviesAction, search }) => {

    console.log(search)

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search movie"
                value={search}
                onChange={({ target: { value } }) => moviesAction.setSearch(value)}
                className="me-2"
                aria-label="Search"
            />
            <Button
                variant="outline-success"
                type="button"
            >
                Search
            </Button>
        </Form>
    )
}

const mapStateToProps = ({ appReducer }) => ({
    search: appReducer?.search ?? "",
});

const mapDispatchToProps = bindAll({ MoviesAction });

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);