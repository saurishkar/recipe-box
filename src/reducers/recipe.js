const Recipe = (state = {}, action) => {
	switch(action.type) {
	case 'CREATE_RECIPE': return state;

	case 'FETCH_ALL_RECIPES': return action.payload;

	default: return state;
	}
};

export default Recipe;