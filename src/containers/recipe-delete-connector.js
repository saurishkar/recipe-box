import { connect } from 'react-redux';

import RecipeDelete from '../components/recipe-delete';
import Recipe from '../apis/recipe';

function mapDispatchToProps(dispatch) {
	return {
		DeleteRecipe: (id) => {
			const promise = Recipe.Delete(id);
			promise.then(() => {
				dispatch({
					type: 'DELETE_RECIPE'
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

export default connect(null, mapDispatchToProps)(RecipeDelete);