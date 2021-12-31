import React from 'react';
import Post from '../models/Post';

function PostList(props) {

  let rows = props.posts.map((post: Post, index: number) => {
    return <div className="card" key={index}>
      <p className="small">{ post.name } <span className="muted">@{post.handle}</span></p>
      <p className="">{ post.body }</p>
      <p className="small right">{new Date(post.timestamp).toLocaleString('en-GB')}</p>
    </div>;
  });

  return <div id="post-list">{rows}</div>;
}

export default PostList;
