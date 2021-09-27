import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import User from './pages/User';
import NotFound from './pages/NotFound';

function MainRoutes() {
	return (
		<Routes>
			<Route path='github-lite/' element={<Search />} />
			<Route path='github-lite/users/:user' element={<User />} />
			<Route path='github-lite/*' element={<NotFound />} />
		</Routes>
	);
}

export default MainRoutes;
