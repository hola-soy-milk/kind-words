import axios from "axios";

export async function getPosts() {
  const res = await axios.get("http://localhost:6060/posts");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postPost(post) {
  await axios.post("http://localhost:6060/posts", post);
}
