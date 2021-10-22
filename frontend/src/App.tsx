import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Post from './models/Post'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const res = await axios.get<Post[]>("http://localhost:6060/posts");
    if (res.status === 200) {
      let data: Post[] = res.data;
      setPosts(data);
    }
  }

  async function submitPost(post: Post) {
    await axios.post<Post>("http://localhost:6060/posts", post);
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Kind Words</h1>
      <PostForm submitPost={submitPost}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
