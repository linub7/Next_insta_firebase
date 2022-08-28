import Image from 'next/image';

const StoryItem = ({ user }) => {
  return (
    <div>
      <Image src={user?.img} height={50} width={50} alt={user?.username} />
      <p>{user?.username}</p>
    </div>
  );
};

export default StoryItem;
