import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import logo from './logo.svg';
import './App.css';

import RecipeBoxConnector from './containers/recipe-box-connector';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

class App extends Component {
	render() {
		return (
			<Provider store = {createStoreWithMiddleware(reducers)}>
				<div className="App container">
					<RecipeBoxConnector />
				</div>
			</Provider>
		);
	}
}

export default App;
