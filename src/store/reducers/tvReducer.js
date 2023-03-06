import { SET_TV } from "store/types";

const initialState = {
    tv: [],
};

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV:

            return {
                ...state,
                tv: action?.payload,
            }
    
        default:
            return state;
    }
};

export default tvReducer