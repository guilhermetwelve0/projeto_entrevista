import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './theme/globalStyle';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes />
				<GlobalStyle />
			</Router>
		</Provider>
	);
}

export default App;
