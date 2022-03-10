import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchCharacter } from "./components/SearchCharacter/SearchCharacter";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { HomePage } from "./components/home/HomePage";

import "./sass/App.scss";

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/search" element={<SearchCharacter />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
