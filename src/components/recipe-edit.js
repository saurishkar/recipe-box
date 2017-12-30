import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class RecipeEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			ingredients: this.props.ingredients
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { name, ingredients } = this.state;
		const data = {
			name,
			ingredients
		};
		const promise = this.props.UpdateRecipe(data, this.props.id);
		promise.then(() => {
			this.props.closeModal();
		});
	}

	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.closeModal}>
				<Modal.Header closeButton>
					<h4>Edit Recipe</h4>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-sm-12">
								<label htmlFor="name">Recipe Name</label>
								<input type="text" placeholder="Recipe Name" value={this.state.name} 
									onChange={(event) => this.setState({name: event.target.value})} 
									className="form-control" /><br />
								<label htmlFor="ingredients">Ingredients</label>
								<textarea type="text" placeholder="Enter Ingredients separated,by,commas"
									value={this.state.ingredients} className="form-control" rows="5"
									onChange={(event) => this.setState({ingredients: event.target.value})} />
							</div>
						</div><br />
						<div className="btn-group">
							<button className="btn btn-md btn-primary" type="submit">Update</button>
							<button className="btn btn-md btn-default" onClick={() => this.props.closeModal()}>Cancel</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}

export default RecipeEdit;