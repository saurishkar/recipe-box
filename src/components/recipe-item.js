import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import RecipeEditConnector from '../containers/recipe-edit-connector';

class RecipeItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showItem: false,
			showEditModal: false
		};
		this.splitIngredients = this.splitIngredients.bind(this);
		this.closeEditModal = this.closeEditModal.bind(this);
	}

	splitIngredients(str) {
		const ing = str.split(',');
		const renderIng = ing.map((item, index) => {
			return (
				<li className="list-group-item" key={index}>
					{item}
				</li>
			);
		});
		return renderIng;
	}

	closeEditModal() {
		this.setState({
			showEditModal: false
		});
	}
	
	render() {
		const { id, recipes } = this.props;
		return (
			<div className="recipe-item">
				<div className="panel panel-success">
					<div className="panel-heading">
						<a role="button" onClick={() => this.setState({showItem: !this.state.showItem})}><b>{recipes[id].name}</b></a>
					</div>
					<Collapse  in={this.state.showItem}>
						<div className="panel-body">
							<h4 className="text-center">Ingredients</h4>
							<hr />
							<ul className="list-group">
								{this.splitIngredients(recipes[id].ingredients)}
							</ul>
							<div className="btn-group">
								<button className="btn btn-danger btn-md">Delete</button>
								<button className="btn btn-md btn-default" onClick={() => this.setState({showEditModal: true})}>Edit</button>
							</div>
						</div>
					</Collapse>
				</div>
				<RecipeEditConnector 
					name={recipes[id].name} 
					ingredients={recipes[id].ingredients} 
					showModal={this.state.showEditModal}
					closeModal={this.closeEditModal} 
					id = {id} />
			</div>
		);
	}
}

export default RecipeItem;