import { combineReducers } from 'redux';

import Recipe from './recipe';

const rootReducer = combineReducers({
	recipes: Recipe
});

export default rootReducer;