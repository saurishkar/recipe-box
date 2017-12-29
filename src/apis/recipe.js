import * as firebase from 'firebase';

const Recipe = {
	Create: (data) => {
		const promise = firebase.database().ref('/recipe').push(data);
		return promise;
	}
};

export default Recipe;