import { combineReducers } from 'redux';
import appReducer from './appReducer';
import tvReducer from './tvReducer';

const rootReducer = combineReducers({
    tvReducer,
    appReducer,
});

export default rootReducer;