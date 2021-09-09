import React from 'react';
import { useState } from 'react';
import Button from './../Button/Button';
import Input from './../Input/Input';

const Form = ({add}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        
        const newPost = {
            title: post.title,
            body: post.body,
            id: Date.now()
        }

        add(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <form>
            <Input value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} placeholder="Title" />
            <Input value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} placeholder="Description"/>
            <Button onClick={addNewPost}>Send</Button>
      </form>
    );
};

export default Form;