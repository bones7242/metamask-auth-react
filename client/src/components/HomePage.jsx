// load dependencies 
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router'

// load components
import CheckCredentials from './CheckCredentials.jsx';
import FlashTest from './FlashTest.jsx';

const HomePage = () => (
	<Card className="container">
		<CardTitle title="Home Page" subtitle="This is the home page."/>
		<CheckCredentials />
		<FlashTest />
	</Card>
);

export default HomePage;