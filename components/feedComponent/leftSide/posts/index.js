import GeneralProfile from 'public/images/general-profile.webp';
import Natalie from 'public/images/natalie.png';
import Jungle from 'public/images/jungle.jpg';
import PostItem from './PostItem';
const FeedLeftSidePosts = () => {
  const posts = [
    {
      id: '1',
      username: 'linub',
      userImg: GeneralProfile,
      img: Natalie,
      caption: 'Amazing and cute',
    },
    {
      id: '2',
      username: 'mohammad',
      userImg: GeneralProfile,
      img: Jungle,
      caption: 'incredible',
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <PostItem key={post?.key} post={post} />
      ))}
    </div>
  );
};

export default FeedLeftSidePosts;
