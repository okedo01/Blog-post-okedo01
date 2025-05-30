import { Link } from "react-router-dom";
import { posts } from "../Data";

const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
