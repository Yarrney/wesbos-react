import React from 'react';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';

class Inventory extends React.Component {
	constructor() {
		super();

		// bind this to other methods
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const fish = this.props.fishes[key];
		// take a copy of the fish and update with the new data
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value //overwrite what has been changed
		}
		this.props.updateFish(key, updatedFish); //pass this value up to updateFish
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="Fish name" onChange={(e) => this.handleChange(e, key)} />
				<input type="text" name="price" value={formatPrice(fish.price)} placeholder="Fish price" />
				<select type="text" name="status" value={fish.status} placeholder="Fish status">
					<option value="available">Fresh!</option>
	 				<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" value={fish.desc} placeholder="Fish desc"></textarea>
				<input type="text" name="image" value={fish.image} placeholder="Fish image" />
			</div>
		)
	}
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

export default Inventory;