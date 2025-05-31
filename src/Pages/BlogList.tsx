import { Link } from "react-router-dom";
import type { Post } from "../Type";

type BlogListProps = {
  posts: Post[];
}

const BlogList = ({posts}: BlogListProps) => {
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
