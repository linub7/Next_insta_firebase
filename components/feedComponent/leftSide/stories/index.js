import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import StoryItem from './StoryItem';
const FeedLeftSideStories = () => {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    let storyUsersArr = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsersArr);
  }, []);

  console.log(storyUsers);

  return (
    <div>
      {storyUsers?.map((user) => (
        <StoryItem key={user?.id} user={user} />
      ))}
    </div>
  );
};

export default FeedLeftSideStories;
