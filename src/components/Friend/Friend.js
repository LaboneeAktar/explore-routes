import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { name, email, username, id } = friend;
    return (
        <div className='friend'>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <p>UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;