import { connect } from 'react-redux';

import RecipeEdit from '../components/recipe-edit';
import Recipe from '../apis/recipe';

function mapDispatchToProps(dispatch) {
	return {
		UpdateRecipe: (data, id) => {
			const promise = Recipe.Update(data, id);
			promise.then(() => {
				dispatch({
					type: 'UPDATE_RECIPE'
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

export default connect(null, mapDispatchToProps)(RecipeEdit);