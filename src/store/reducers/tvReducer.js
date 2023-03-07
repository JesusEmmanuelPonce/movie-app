import { SET_TV, SET_TV_WANTED } from "store/types";

const initialState = {
    tv: [],
    tvsWanted: [],
};

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV:

            return {
                ...state,
                tv: action?.payload,
            }

        case SET_TV_WANTED:
            return {
                ...state,
                tvsWanted: action?.payload,
            }
    
        default:
            return state;
    }
};

export default tvReducer