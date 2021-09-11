import React from 'react';
import Post from './../Post/Post'
import classes from './PostList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, ...props }) => {
    
    return (
        posts.length !== 0 ?
        <div className={classes.postList}>
            <TransitionGroup>
                {posts.map(post => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} post={post} />
                    </CSSTransition>

                })}
            </TransitionGroup>

        </div>
        : 
        <h1>No posts</h1>
    );
};

export default PostList;