/* eslint-disable @next/next/no-img-element */
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const PostHeader = ({ userImg, username }) => {
  return (
    <div className="flex items-center p-5 ">
      <img
        src={userImg}
        alt={username}
        className="h-12 rounded-full object-cover border p-1 mr-3"
      />
      <p className="font-bold flex-1 cursor-pointer">{username}</p>
      <HiOutlineDotsHorizontal className="h-5 cursor-pointer" />
    </div>
  );
};

export default PostHeader;
