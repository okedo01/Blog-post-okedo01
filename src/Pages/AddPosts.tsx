import { useState } from "react";
import type { Post } from "../Type"
import { useNavigate } from "react-router-dom";

type addPostProps = {
    onAddPost: (post: Post) => void;
}

const AddPosts = ({onAddPost}: addPostProps) => {
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newPost: Post = {
            id: Date.now(),
            title,
            content,
        }
        onAddPost(newPost)
        navigate("/")
    }
  return (
    <div className="user-form">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)} className="title"/>
            <textarea placeholder="Enter a content" value={content} onChange={(e) => setContent(e.target.value)} className="content"></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}

export default AddPosts