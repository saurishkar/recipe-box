import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyC3Px4Gar0dglLoWif8YkWxlc0_9dSjzfk',
	authDomain: 'recipe-box-aeb90.firebaseapp.com',
	databaseURL: 'https://recipe-box-aeb90.firebaseio.com',
	projectId: 'recipe-box-aeb90',
	storageBucket: 'recipe-box-aeb90.appspot.com',
	messagingSenderId: '1075536432906'
};
firebase.initializeApp(config);
  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
