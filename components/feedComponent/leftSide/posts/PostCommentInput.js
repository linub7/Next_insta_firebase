import { VscSmiley } from 'react-icons/vsc';

const PostCommentInput = () => {
  return (
    <form className="flex items-center p-4">
      <VscSmiley size={20} />
      <input
        type="text"
        placeholder="Enter your comment ..."
        className="border-none flex-1 focus:ring-0"
      />
      <button className="text-blue-400 font-bold" disabled={true} type="submit">
        Post
      </button>
    </form>
  );
};

export default PostCommentInput;
