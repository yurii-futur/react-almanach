import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button';
import { usePosts } from './components/Hooks/usePosts';

function App() {

  const [posts, setPosts] = useState([{ title: 'First title', body: 'Description of first post', id: Date.now() }])
  const [filter, setFilter] = useState({sort: '', filter: ''})
  const [visible, setVisible] = useState(false)
  

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    const filteredPosts = posts.filter(p => p.id !== post.id)
    setPosts(filteredPosts)
  }

  const sortedAndFilteredPosts = usePosts(filter.sort, posts, filter.query)

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
      <Button onClick={() => setVisible(true)}>Create post</Button>
      <Modal visible={visible}>
        <Form add={addNewPost} />
      </Modal>
      
      <Filter filter={filter} setFilter={setFilter} options={options}/>
      {sortedAndFilteredPosts.length !== 0 ?
        <PostList remove={removePost} posts={sortedAndFilteredPosts} />
        :
        <h1>No posts</h1>
      }
    </div>
  );
}

export default App;
