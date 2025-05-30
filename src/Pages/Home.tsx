import { Link } from "react-router-dom"
import { posts } from "../Data"

const Home = () => {
  return (
    <div>
      <ul>
        <h1>Blog Posts</h1>
        { posts.map((post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        )))}
      </ul>
    </div>
  )
}

export default Home