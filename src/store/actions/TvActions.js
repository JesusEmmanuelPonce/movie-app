import { SET_TV } from "store/types";

const setTv = tvs => ({
    type: SET_TV,
    payload: tvs
});

const TvActions = {
    setTv,
};

export default TvActions;