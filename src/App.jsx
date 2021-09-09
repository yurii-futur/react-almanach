import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import Select from './components/Select/Select';

function App() {

  const [posts, setPosts] = useState([{ title: 'First title', body: 'Description of first post', id: Date.now() }])
  const [selectedSort, setSelectedSort] = useState('')

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    const filteredPosts = posts.filter(p => p.id !== post.id)
    setPosts(filteredPosts)
  }

  const options = [
    {
      title: 'По заголовку', value: 'title'
    },
    {
      title: 'По описанию', value: 'body'
    },
  ]

  return (
    <div className="App">
      <Form add={addNewPost} />
      <Select value={selectedSort} onChange={sort => setSelectedSort(sort)} defaultValue='Сортировка по' options={options} />
      {posts.length !== 0 ?
        <PostList remove={removePost} posts={posts} />
        :
        <h1>No posts</h1>
      }
    </div>
  );
}

export default App;
