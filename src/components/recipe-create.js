import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class RecipeCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			ingredients: ''
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
		const promise = this.props.CreateRecipe(data);
		promise.then(() => {
			this.props.closeModal();
		});
	}

	render() {
		return (
			<div className="recipe-create-modal">
				<Modal show={this.props.showModal} onHide={this.props.closeModal}>
					<form>
						<Modal.Header closeButton>
						Create Recipe
						</Modal.Header>
						<Modal.Body>
							<div className="row">
								<div className="col-sm-12">
									<label htmlFor="name">Recipe Name</label>
									<input 
										type="text" 
										name="name" 
										className="form-control"
										placeholder="Recipe Name" 
										value={this.state.name} 
										onChange={(e) => this.setState({name: e.target.value})}
									/>
									<br />
									<label htmlFor="ingredients">Ingredients</label>
									<textarea
										type="text"
										rows="5"
										className="form-control"
										placeholder="Enter ingredients separated,by,commas"
										value={this.state.ingredients}
										onChange={(e) => this.setState({ingredients: e.target.value})}
									/>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<div className="btn-group">
								<button className="btn btn-md btn-primary" type="submit" onClick={this.handleSubmit}>Submit</button>
								<a role="button" tabIndex="-1" className="btn btn-default btn-md" onClick={() => this.props.closeModal()}>Cancel</a>
							</div>
						</Modal.Footer>
					</form>
				</Modal>
			</div>
		);
	}
}

export default RecipeCreate;