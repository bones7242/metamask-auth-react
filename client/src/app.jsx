// import dependencies 
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// remove tap delay, essential for materialUI to work properly
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Router history={browserHistory} routes={routes} />
	</MuiThemeProvider>
);

// render the dom
ReactDom.render(<App />, document.getElementById('react-app'))