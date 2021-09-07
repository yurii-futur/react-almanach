import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import PostList from './components/PostList/PostList';

function App() {

  const [posts, setPosts] = useState([{title: 'First title', body: 'Description of first post', id: Date.now()}])
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <Input value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} placeholder="Title" />
        <Input value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} placeholder="Description"/>
        <Button onClick={addNewPost}>Send</Button>
      </form>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
