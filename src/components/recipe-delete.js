import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class RecipeDelete extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		const promise = this.props.DeleteRecipe(this.props.id);
		promise.then(() => {
			this.props.closeModal();
		});
	}

	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.closeModal}>
				<Modal.Header closeButton>
					<h4>Delete Recipe</h4>
				</Modal.Header>
				<Modal.Body>
					<p style={{textAlign: 'center'}}> Are you sure you want to Delete this Recipe ? </p>
					<br/>
					<div className="btn-group">
						<button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
						<button className="btn btn-default" onClick={() => this.props.closeModal()}>Cancel</button>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default RecipeDelete;