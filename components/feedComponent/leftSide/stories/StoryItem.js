/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const StoryItem = ({ user }) => {
  return (
    <div>
      <img
        src={user?.img}
        alt={user?.username}
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-all duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-gray-800">{user?.username}</p>
    </div>
  );
};

export default StoryItem;
