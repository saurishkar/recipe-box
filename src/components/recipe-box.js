import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import RecipeCreateConnector from '../containers/recipe-create-connector';
import RecipeItem from './recipe-item';

class RecipeBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
		this.closeModal = this.closeModal.bind(this);
	}

	componentWillMount() {
		const promise = this.props.FetchRecipes();
		promise.then((snap) => {
			console.log('data', snap.val());
		});
	}

	closeModal() {
		this.setState({showModal: false});
	}

	render() {
		const {recipes} = this.props;
		const keys = recipes ? Object.keys(this.props.recipes) : [];
		const recipeItems = keys.map((item) => {
			return (
				<li className="recipe-item" key={item}>
					<RecipeItem recipes={recipes} id={item} />
				</li>
			);
		});
		const renderRecipes = keys.length > 0 ? (
			<div className="well">
				<ul className="list-unstyled recipe-items">
					{recipeItems}
				</ul>
			</div>
		) : '';
		console.log(recipes);
		return (
			<div className="recipe-box">
				<h1>Welcome to Recipe Box</h1>
				{renderRecipes}
				<button className="btn btn-primary btn-md" onClick={() => this.setState({showModal: true})}>
				Create Recipe
				</button>
				<RecipeCreateConnector showModal={this.state.showModal} closeModal={this.closeModal} />
			</div>
		);
	}
}

export default RecipeBox;
