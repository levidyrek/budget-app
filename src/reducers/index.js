import { combineReducers } from 'redux';
import * as responsiveReducers from './responsive';


const rootReducer = combineReducers({
    ...responsiveReducers
});

export default rootReducer;