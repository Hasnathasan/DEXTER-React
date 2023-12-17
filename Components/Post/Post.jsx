import React from 'react';
import './Post.css' 

const Post = (props) => {
    const {title, body} = props.post;
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;