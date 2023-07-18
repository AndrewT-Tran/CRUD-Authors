import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState('');

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
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    return (
        <>
            <h2>Update an Existing Author</h2>
            <form onSubmit={updateAuthor}>
                <p>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={authorName}
                        onChange={(e) => {
                            setAuthorName(e.target.value);
                        }}
                    />
                </p>
                <button onClick={updateAuthor} type="submit">Update</button>
            </form>
        </>
    );
};

export default Update;
