import { FiHeart } from 'react-icons/fi';
import { BsChatDots, BsBookmark } from 'react-icons/bs';

const PostButtons = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 space-x-3">
        <div className="flex items-center space-x-3">
          <FiHeart size={20} className="post-action-btn" />
          <BsChatDots size={20} className="post-action-btn" />
        </div>
        <BsBookmark size={20} className="post-action-btn" />
      </div>
    </div>
  );
};

export default PostButtons;
