import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);

    return (
        <div>
            <h3>Every Thing You Need to Know about this Person</h3>
            <h3>Details About: {friend.name}</h3>
            <p>Call Him/Her: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;