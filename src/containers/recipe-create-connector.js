import { connect } from 'react-redux';

import Recipe from '../apis/recipe';
import RecipeCreate from '../components/recipe-create';

function mapDispatchToProps(dispatch) {
	return {
		CreateRecipe: (data) => {
			const promise = Recipe.Create(data);
			promise.then(() => {
				dispatch({
					type: 'CREATE_RECIPE'
				});
				const promise2 = Recipe.FetchAll();
				promise2.then((snap) => {
					dispatch({
						type: 'FETCH_ALL_RECIPES',
						payload: snap.val()
					});
				});
			});
			return promise;
		}
	};
}

export default connect(null, mapDispatchToProps)(RecipeCreate);