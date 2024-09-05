import { useState } from "react";
function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const post = {
    title,
    body,
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPost(post);
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
      />
      <input
        onChange={(e) => setBody(e.target.value)}
        type="text"
        id="body"
        name="body"
        value={body}
      />
      <button>Submit</button>
    </form>
  );
}

export default AddPost;
