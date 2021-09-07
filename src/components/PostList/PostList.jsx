import React from 'react';
import Post from './../Post/Post'
import classes from './PostList.module.css';

const PostList = ({posts, ...props}) => {
    return (
        <div className={classes.postList}>
            {posts.map(post => {
                
                return <Post key={post.id} post={post}/>
            })}
        </div>
    );
};

export default PostList;