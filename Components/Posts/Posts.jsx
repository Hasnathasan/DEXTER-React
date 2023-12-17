import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])
    return (
        <div className="posts-container">
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;