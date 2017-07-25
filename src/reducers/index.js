import { combineReducers } from 'redux';
import * as responsiveReducers from './responsive';
import * as budgetReducers from './budgets';
import * as authReducers from './auth';
import * as dialogReducers from './dialogs';


const rootReducer = combineReducers({
    ...responsiveReducers,
    ...budgetReducers,
    ...authReducers,
    ...dialogReducers
});

export default rootReducer;