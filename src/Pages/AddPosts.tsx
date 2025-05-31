import { useState } from "react";
import type { Post } from "../Type"
import { useNavigate } from "react-router-dom";
import { posts } from "../Data";

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}

export default AddPosts