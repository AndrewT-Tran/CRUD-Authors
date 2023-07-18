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
            <p>
                <label>Author's Name:</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </p>
            <button type="submit">Submit</button>
        </form>
    );
};

export default New;
