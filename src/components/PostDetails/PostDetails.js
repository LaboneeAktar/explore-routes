import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${post.userId}`)
    }

    return (
        <div>
            <h3>All about Posts</h3>
            <h5>Post Id: {post.id}</h5>
            <h4>Post Title: {post.title}</h4>
            <p> {post.body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;