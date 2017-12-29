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
			});
			return promise;
		}
	};
}

export default connect(null, mapDispatchToProps)(RecipeCreate);