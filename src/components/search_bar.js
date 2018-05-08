import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: ''};
	}
	//must have render for all classes
	render() {
		//must return jsx
		return (
		<div className="search-bar">
			<input 
			value = {this.state.term}
			onChange = {event => this.onInputChange(event.target.value)} /> 
		</div>
	);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

/* functional component 
	SearchBar => {
		return <input />
	}

*/


export default SearchBar;