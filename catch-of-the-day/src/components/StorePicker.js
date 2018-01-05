import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// Can use a constructor to bind this to other methods
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	goToStore(event) {
		event.preventDefault(); // stops page refresh
		console.log('You changed the URL');
		// first get text from box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// transition from / to /store/:storeid
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{ /*  The arrow function above passes the "this" event through to goToStore from StorePicker you can also use .bind(this) to let goToStore have access to 'this' from goToStore - like:
				onSubmit={this.goToStore.bind(this) */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

// StorePicker expects a router component (to inherit)
// Surface router from the parent
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;