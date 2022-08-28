import PostButtons from './PostButtons';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const PostItem = ({ post }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <PostHeader userImg={post?.userImg} username={post?.username} />

      <PostImage img={post?.img} />

      <PostButtons />
    </div>
  );
};

export default PostItem;
