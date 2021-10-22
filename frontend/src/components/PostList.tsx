import React from 'react';
import Post from '../models/Post'

interface Props {
  posts: Post[]
}

function PostList(props: Props) {

  let rows = props.posts.map((post, index) => {
    return <tr key={index}>
      <td>{post.sender.name}</td>
      <td>{post.sender.handle}</td>
      <td>{post.body}</td>
    </tr>;
  });

  return <table>{rows}</table>;
}

export default PostList;
