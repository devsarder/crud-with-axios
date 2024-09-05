function Posts({ onEditClick, posts, onDeletePost }) {
  return (
    <div>
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{`${post.id}.`}</span>
            {post.body} <span>{post.title}</span>
            <div>
              <span onClick={() => onDeletePost(post.id)}>❌</span>
              <span onClick={() => onEditClick(post)}> ✏️</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Posts;
