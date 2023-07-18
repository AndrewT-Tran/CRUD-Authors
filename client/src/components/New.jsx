import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const New = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/author", { name })
			.then(() => navigate("/"))
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="form-control w-full max-w-xs mx-auto">
				<label className="label">
					<span className="label-text">Favorite Author's name?</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered input-success w-full min-w-xs"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default New;
