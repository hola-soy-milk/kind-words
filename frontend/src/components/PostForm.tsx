import React from "react";
import Post from '../models/Post'

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
        body: target.body.value,
        timestamp: new Date().getTime()
    };
    props.submitPost(post);
  }

  return (
    <form id="post-form" onSubmit={postPost}>
      <div className="rows">
      <label>
        <span>Nombre</span>
        <input type="text" name="sender" id="sender" />
      </label>
      <label>
        <span>Usuario</span>
        <input type="text" name="handle" id="handle" />
      </label>
      <label>
        <span>Palabras</span>
      <input type="text" name="body" id="body" />
      </label>
      </div>
      <input type="submit" value="Send"/>
    </form>
  );
}

export default PostForm;
