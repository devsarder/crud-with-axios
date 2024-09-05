import { useState } from "react";

function EditPost({ onEditPost, post }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const updatePost = {
    id: post.id,
    title,
    body,
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onEditPost(updatePost);
        setBody("");
        setTitle("");
      }}
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        name="title"
        value={title}
        placeholder={post.title}
      />
      <input
        onChange={(e) => setBody(e.target.value)}
        type="text"
        id="body"
        name="body"
        value={body}
        placeholder={post.body}
      />
      <button>Submit</button>
    </form>
  );
}

export default EditPost;
