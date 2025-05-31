import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlogList from "./Pages/BlogList";
import PostDetails from "./Pages/PostDetails";
import AddPosts from "./Pages/AddPosts";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Footer";
import { useState } from "react";
import type { Post } from "./Type";
import { posts as initialPosts } from "./Data";
import "./App.css";

function App() {
  const [ posts, setPost ] = useState<Post[]>(initialPosts)

  const handleAddPost = (post: Post) => {
    setPost((prevPosts) => [...prevPosts, post])
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home posts={posts}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post" element={<BlogList posts={posts}/>} />
        <Route path="post/:id" element={<PostDetails posts={posts}/>} />
        <Route path="add" element={<AddPosts onAddPost={handleAddPost}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
