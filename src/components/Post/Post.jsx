import React from 'react';
import classes from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={classes.post}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;