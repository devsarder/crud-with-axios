import { useEffect, useState } from "react";
import api from "./api/api";
import "./app.css";
import AddPost from "./component/AddPost";
import EditPost from "./component/EditPost";
import Posts from "./component/Posts";
function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  // handler for editing the post
  const handleEditPost = async (updatePost) => {
    try {
      const response = await api.patch(`/posts/${updatePost.id}`, updatePost);
      const updatedPosts = posts.map((post) =>
        post.id === response.data.id ? response.data : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      setError(error.message);
    }
  };
  // handler for add post
  const handleAddPost = async (post) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      const response = await api.post("/posts", {
        id: id.toString(),
        ...post,
      });
      if (response.data) {
        setPosts([...posts, response.data]);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  // handler for delete post
  const handleDeletePost = async (postId) => {
    try {
      if (confirm("Are you sure you want to delete")) {
        await api.delete(`/posts/${postId}`);
        const restPosts = posts.filter((post) => post.id !== postId);
        setPosts(restPosts);
      } else {
        console.log("You chose to do not delete the post");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  // useEffect for fetching posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get("/posts");
        if (response && response.data) {
          setPosts(response.data);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getPosts();
  }, []);
  return (
    <div>
      <h1>Async Js With Axios</h1>
      <hr />

      <Posts
        onDeletePost={handleDeletePost}
        onEditClick={setPost}
        posts={posts}
      />
      <hr />
      {!post ? (
        <AddPost onAddPost={handleAddPost} />
      ) : (
        <EditPost onEditPost={handleEditPost} post={post} />
      )}
      {error && (
        <>
          <hr></hr>
          <div className="error">{error}</div>
        </>
      )}
    </div>
  );
}

export default App;
