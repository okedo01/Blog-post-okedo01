import { Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/NavBar/Home"
import About from "./Pages/NavBar/About"
import Contact from "./Pages/NavBar/Contact"
import "./App.css"

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
