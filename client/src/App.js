import "./output.css";
import Main from "./views/Main";
import New from './components/New'
import Update from './views/Update'
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Link to="/" className="link-secondary link-hover text-2xl">
				<span className="text-warning"> | </span>
				Home<span className="text-warning"> | </span>
			</Link>
			<Link to="/author/new" className="link-primary link-hover text-2xl">
				<span className="text-success"> + </span> Add an Author{" "}
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
