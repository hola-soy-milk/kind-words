import React from 'react';

interface Post {
    sender: String;
    body: String;
}

interface Props {
  posts: Post[]
}

function PostList(props: Props) {

  let rows = props.posts.map((post, index) => {
    return <li key={index}>{post.sender}</li>;
  });

  return <ul>{rows}</ul>;
}

export default PostList;
