import React from "react";
import axios from "axios";

interface Sender {
    name: String;
    handle: String;
}

interface Post {
    sender: Sender;
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
      handle: { value: string };
      body: { value: string };
    };
    let post : Post = {
        sender: {
          name: target.sender.value,
          handle: target.handle.value,
        },
        body: target.body.value
    };
    props.submitPost(post);
  }

  return (
    <form onSubmit={postPost}>
      <label>
        Sender name
        <input type="text" name="sender" id="sender" />
      </label>
      <label>
        Sender handle
        <input type="text" name="handle" id="handle" />
      </label>
      <label>
        Words
      <input type="text" name="body" id="body" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default PostForm;
