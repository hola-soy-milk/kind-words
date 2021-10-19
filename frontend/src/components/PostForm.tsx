import React from "react";
import axios from "axios";

interface Post {
  sender: String;
  body: String;
}

interface Props {
    submitPost(post: Post): any
}

function PostForm(props: Props) {
  function postPost(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      sender: { value: string };
      body: { value: string };
    };
    let post : Post = {
        sender: target.sender.value,
        body: target.body.value
    };
    props.submitPost(post);
  }

  return (
    <form onSubmit={postPost}>
      <input type="text" name="sender" id="sender" />
      <input type="text" name="body" id="body" />
      <input type="submit" />
    </form>
  );
}

export default PostForm;
