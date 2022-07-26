import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import FilterPage from './FilterPage';

function Page() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/filter' element={<FilterPage />} />
			</Routes>
		</main>
	);
}

export default Page;
