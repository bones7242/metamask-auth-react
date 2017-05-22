import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router';
import TopBar from './TopBar.jsx'



class Base extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div> 
				<TopBar />
				{this.props.children}
			</div>
		);
	}
	
};

Base.propTypes = {
	children: PropTypes.object.isRequired
};

export default Base;