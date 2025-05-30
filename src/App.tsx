import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Pages/Layout"
import NavBar from "./NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
