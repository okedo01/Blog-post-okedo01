import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogList from "./Pages/BlogList";
import PostDetails from "./Pages/PostDetails";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useState } from "react";
import AddPosts from "./Pages/AddPosts";
import type { Post } from "./Type";

function App() {
  const [ post, setPost ] = useState<Post[]>(initialPosts)

  const handleAddPost = (post: Post) => {
    setPost((prevPosts) => [...prevPosts, post])
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post" element={<BlogList />} />
        <Route path="post/:id" element={<PostDetails />} />
        <Route path="add" element={<AddPosts onAddPost={handleAddPost}/>} />
      </Route>
    </Routes>
  );
}

export default App;
