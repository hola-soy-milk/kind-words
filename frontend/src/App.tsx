import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Post from './models/Post'
import {getPosts, postPost} from './utils/Api'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    setPosts(await getPosts());
  }

  async function submitPost(post: Post) {
    await postPost(post);
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
