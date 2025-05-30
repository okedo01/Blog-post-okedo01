import { useParams } from "react-router-dom";
import { posts } from "../Data";
import type { Post } from "../Type";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post: Post | undefined = posts.find((p) => p.id === postId);

  if (!post) {
    return <h3>Post not found</h3>;
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
