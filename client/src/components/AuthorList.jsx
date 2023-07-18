import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    const deleteAuthor = (authorId) => {
        axios
            .delete("http://localhost:8000/api/author/" + authorId)
            .then(() => removeFromDom(authorId))
            .catch((err) => console.error(err));
    };

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter((author) => author._id !== authorId));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/author")
            .then((res) => setAuthors(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1 className="text-2xl text-primary font-semibold">
                We have quotes by :
            </h1>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="text-accent text-2xl font-light">Author</th>
                            <th className="text-focus text-2xl font-light">
                                Actions Available
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author) => (
                            <tr className="bg-secondary-content" key={author._id}>
                                <td className="text-xl font-semibold text-secondary-focus">
                                    {author.name}
                                </td>
                                <td>
                                    <Link
                                        to={`/author/${author._id}/edit`}
                                        className="btn btn-sm rounded mx-1 bg-success">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteAuthor(author._id)}
                                        className=" btn btn-sm rounded mx-1 bg-warning">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AuthorList;
