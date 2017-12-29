import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import logo from './logo.svg';
import './App.css';

import RecipeBox from './components/recipe-box';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

class App extends Component {
	render() {
		return (
			<Provider store = {createStoreWithMiddleware(reducers)}>
				<div className="App container">
					<RecipeBox />
				</div>
			</Provider>
		);
	}
}

export default App;
