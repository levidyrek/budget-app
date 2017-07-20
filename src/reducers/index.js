import { combineReducers } from 'redux';
import * as responsiveReducers from './responsive';
import * as budgetReducers from './budgets';
import * as authReducers from './auth';


const rootReducer = combineReducers({
    ...responsiveReducers,
    ...budgetReducers,
    ...authReducers
});

export default rootReducer;