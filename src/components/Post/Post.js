import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    // console.log(post);
    const { id, title, body } = post;

    const nevigate = useNavigate();

    const handleNevigate = () => {
        nevigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h3>Post Title: {title} </h3>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNevigate}>  Show Details2</button>
        </div>
    );
};

export default Post;