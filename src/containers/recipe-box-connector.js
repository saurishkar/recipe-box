import { connect } from 'react-redux';

import Recipe from '../apis/recipe';
import RecipeBox from '../components/recipe-box';

function mapStateToProps({recipes}) {
	return {recipes};
}

function mapDispatchToProps(dispatch) {
	return {
		FetchRecipes: () => {
			const promise = Recipe.FetchAll();
			promise.then((snap) => {
				dispatch({
					type: 'FETCH_ALL_RECIPES',
					payload: snap.val()
				});
			});
			return promise;
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);