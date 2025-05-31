import { Link } from "react-router-dom";
import type { Post } from "../Type";

type HomeProps = {
  posts: Post[];
}

const Home = ({posts}: HomeProps) => {
  return (
    <div>
     <ul className="wrapper">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="posts">
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home