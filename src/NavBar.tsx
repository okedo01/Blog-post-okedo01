import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div className="nav-links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/post">Blog</Link></li>
        <li><Link to="/add">Add Post</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
