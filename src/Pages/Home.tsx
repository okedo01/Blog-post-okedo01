import { Link } from "react-router-dom";
import type { Post } from "../Type";
import "../index.css"

type HomeProps = {
  posts: Post[];
}

const Home = ({posts}: HomeProps) => {
  return (
    <div>
      <h1>Blogs</h1>
     <ul className="wrapper">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="posts">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/add" className="add">Add post</Link>
    </div>
  )
}

export default Home