import * as firebase from 'firebase';

const Recipe = {
	Create: (data) => {
		const promise = firebase.database().ref('/recipes').push(data);
		return promise;
	},
	FetchAll: () => {
		const promise = firebase.database().ref('/recipes').once('value');
		return promise;
	}
};

export default Recipe;