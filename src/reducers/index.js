import { combineReducers } from 'redux';

import Recipe from './recipe';

const rootReducer = combineReducers({
	recipe: Recipe
});

export default rootReducer;