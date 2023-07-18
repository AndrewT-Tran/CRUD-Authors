import "./output.css";
import Main from "./views/Main";
import New from './components/New'
import Update from './views/Update'
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Link to="/" className="font-light link-secondary link-hover text-xl px-1 text-primary-focus">
				<span className="text-warning"> | </span>
				Home<span className="text-warning"> | </span>
			</Link>
			<Link to="/author/new" className="font-light link-primary link-hover text-xl text-info">
				<span className="text-success">+</span> Add an Author
				 <span className="text-warning"> | </span>
			</Link>

			<Routes>
				<Route element={<Main />} path="/" />
				<Route element={<New />} path="/author/new" />
				<Route element={<Update />} path="/author/:id/edit" />
			</Routes>
		</div>
	);
}

export default App;
