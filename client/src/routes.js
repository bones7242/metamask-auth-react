import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './components/DashboardPage.jsx';

// load helpers
import Cookies from '../helpers/cookies.js'

const routes = {
	component: Base,
	childRoutes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/dash',
			component: DashboardPage
		}
	]
};

export default routes;