import { Link } from "react-router-dom";
import type { Post } from "../Type";
import "../index.css"

type BlogListProps = {
  posts: Post[];
}

const BlogList = ({posts}: BlogListProps) => {
  return (
    <>
      <div>
            <h1>Blogs</h1>
            <ul className="wrapper">
              {posts.map((post) => (
                <div key={post.id}>
                  <Link to={`/post/${post.id}`}>
                      {post.title} 
                  </Link>
                </div>
              ))}
            </ul>
      </div>
          <Link to="/add" className="add">Add Post</Link>

    </>
  );
};

export default BlogList;
