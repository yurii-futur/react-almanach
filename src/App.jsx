import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button';
import { usePosts } from './Hooks/usePosts';
import { api } from './API/api';
import Loader from './components/Loader/Loader';
import { useFetch } from './Hooks/useFetch';

function App() {

  const [posts, setPosts] = useState([{ title: 'First title', body: 'Description of first post', id: Date.now() }])
  const [filter, setFilter] = useState({sort: '', filter: ''})
  const [visible, setVisible] = useState(false)
  const [fetchPosts, isLoading, error] = useFetch( async () => {
    const posts = await api.getAll();
    setPosts(posts)
  })
  

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    const filteredPosts = posts.filter(p => p.id !== post.id)
    setPosts(filteredPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  

  
  
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
      {!isLoading ?
        <PostList remove={removePost} posts={sortedAndFilteredPosts} />
        :
        <Loader />
      }
    </div>
  );
}

export default App;
