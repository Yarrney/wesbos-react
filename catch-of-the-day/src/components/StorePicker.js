import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				{ /* This is a JSX Comment (put them inside element) */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default StorePicker;