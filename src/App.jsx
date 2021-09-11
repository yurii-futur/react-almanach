import { useMemo, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';
import Filter from './components/Filter/Filter';

function App() {

  const [posts, setPosts] = useState([{ title: 'First title', body: 'Description of first post', id: Date.now() }])
  const [filter, setFilter] = useState({sort: '', filter: ''})
  

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    const filteredPosts = posts.filter(p => p.id !== post.id)
    setPosts(filteredPosts)
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndFilteredPosts = useMemo(() => {
    if(filter.query) {
      return sortedPosts.filter( s => s.title.toLowerCase().includes(filter.query.toLowerCase()))
    } return sortedPosts
  }, [filter.query, sortedPosts])


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
