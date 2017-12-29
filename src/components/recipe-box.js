import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import RecipeCreateConnector from '../containers/recipe-create-connector';

class RecipeBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.setState({showModal: false});
	}

	render() {
		return (
			<div className="recipe-box">
				<h1>Welcome to Recipe Box</h1>
				<button className="btn btn-primary btn-md" onClick={() => this.setState({showModal: true})}>
				Create Recipe
				</button>
				<RecipeCreateConnector showModal={this.state.showModal} closeModal={this.closeModal} />
			</div>
		);
	}
}

export default RecipeBox;