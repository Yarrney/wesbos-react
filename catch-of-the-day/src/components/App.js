import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';


class App extends React.Component {
	constructor() {
		super();

		// bind this to other methods
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		// getinitialState
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish){
		// copy state then update state
		const fishes = {...this.state.fishes};
		// add in new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		// set state
		this.setState({ fishes }) // same as fishes: fishes
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood market" />
					<ul className="list-of-fishes">
						<Fish />
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;