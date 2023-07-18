import React, { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";
import axios from "axios";

const Main = () => {
	const [authors, setAuthors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/author")
			.then((res) => {
				setAuthors(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	const removeFromDom = (authorId) => {
		setAuthors(authors.filter((author) => author._id !== authorId));
	};

	return (
		<>
			<hr />
			{loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
		</>
	);
};

export default Main;

