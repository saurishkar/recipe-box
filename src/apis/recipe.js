import * as firebase from 'firebase';

const Recipe = {
	Create: (data) => {
		const promise = firebase.database().ref('/recipes').push(data);
		return promise;
	},
	FetchAll: () => {
		const promise = firebase.database().ref('/recipes').once('value');
		return promise;
	},
	Update: (data, id) => {
		const promise = firebase.database().ref(`/recipes/${id}`).set(data);
		return promise;
	},
	Delete: (id) => {
		const promise = firebase.database().ref(`/recipes/${id}`).remove();
		return promise;
	}
};

export default Recipe;