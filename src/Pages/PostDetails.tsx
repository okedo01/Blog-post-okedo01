import { useParams } from "react-router-dom";
import type { Post } from "../Type";

type PostDetailsProps = {
  posts: Post[];
}

const PostDetails = ({posts}: PostDetailsProps) => {
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
