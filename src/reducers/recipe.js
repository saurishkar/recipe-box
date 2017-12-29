const Recipe = (state = {}, action) => {
	switch(action.type) {
	case 'CREATE_RECIPE': return state;

	case 'FETCH_RECIPES': return Object.assign({}, state.recipes, action.payload);

	default: return state;
	}
};

export default Recipe;