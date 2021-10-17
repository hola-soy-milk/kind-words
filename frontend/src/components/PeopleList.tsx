import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Post {
    sender: String;
    body: String;
}

function PeopleList() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const res = await axios.get<Post[]>("http://localhost:6060/posts");
    if (res.status === 200) {
      let data: Post[] = res.data;
      setPosts(data);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  let rows = posts.map((post, index) => {
    return <li key={index}>{post.sender}</li>;
  });

  return <ul>{rows}</ul>;
}

export default PeopleList;
