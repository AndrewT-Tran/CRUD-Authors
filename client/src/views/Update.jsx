import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
	const { id } = useParams();
	const [authorName, setAuthorName] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/author/${id}`)
			.then((res) => {
				setAuthorName(res.data.name);
			})
			.catch((err) => console.error(err));
	}, [id]);

	const updateAuthor = (e) => {
		e.preventDefault();
		axios
			.patch(`http://localhost:8000/api/author/${id}`, { name: authorName })
			.then(() => navigate("/"))
			.catch((err) => console.error(err));
	};

	return (
		<>
			<h2 className="text-2xl my-2 text-primary font-light">
				Update an Existing Author
			</h2>
			<form onSubmit={updateAuthor} className="form-control">
				<div className="form-control w-full max-w-xs mx-auto">
					<label className="label">
						<span className="label-text">What is the updated name?</span>
					</label>
					<input
						type="text"
						placeholder="Updated name here"
						className="input input-bordered border-solid border-2 input-warning w-full min-w-xs"
						name="name"
						id="name"
						value={authorName}
						onChange={(e) => {
							setAuthorName(e.target.value);
						}}
					/>
					<button
						className="btn btn-outine bg-warning outline-4 my-2 w-1/3 text-white mx-auto"
						onClick={updateAuthor}
						type="submit">
						Update
					</button>
				</div>
			</form>
		</>
	);
};

export default Update;
