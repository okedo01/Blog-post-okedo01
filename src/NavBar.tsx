import { Link } from "react-router-dom"
import "./index.css"

const NavBar = () => {
  return (
    <div className="nav-links">
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar