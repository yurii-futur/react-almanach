import React from 'react';
import classes from './Post.module.css'
import Button from '../Button/Button';

const Post = ({post, remove}) => {

    const removePost = () => {
        remove(post)
    }

    return (
        <div className={classes.post}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button onClick={removePost} >Delete</Button>
        </div>
    );
};

export default Post;