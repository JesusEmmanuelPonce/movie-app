import { SET_TV, SET_TV_WANTED } from "store/types";

const setTv = tvs => ({
    type: SET_TV,
    payload: tvs
});

const setTvWanted = tvs => ({
    type: SET_TV_WANTED,
    payload: tvs
});

const TvActions = {
    setTv,
    setTvWanted,
};

export default TvActions;