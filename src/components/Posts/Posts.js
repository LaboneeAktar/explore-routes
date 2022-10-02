import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h3>All Posts are Here.</h3>
            <p>Posts: {posts.length}</p>
            <div className='posts'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;