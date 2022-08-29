import GeneralProfile from 'public/images/general-profile.webp';
import Natalie from 'public/images/natalie.png';
import Jungle from 'public/images/jungle.jpg';
import PostItem from './PostItem';
const FeedLeftSidePosts = () => {
  const posts = [
    {
      id: '1',
      username: 'linub',
      userImg: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`,
      img: `https://images.unsplash.com/photo-1661668105704-2587e586a6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
      caption: 'Amazing',
    },
    {
      id: '2',
      username: 'mohammad',
      userImg: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`,
      img: `https://images.unsplash.com/photo-1661541471551-5d31299e4f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
      caption: 'incredible',
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <PostItem key={post?.id} post={post} />
      ))}
    </div>
  );
};

export default FeedLeftSidePosts;
