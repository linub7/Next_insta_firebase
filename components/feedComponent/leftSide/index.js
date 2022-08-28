import FeedLeftSidePosts from './posts';
import FeedLeftSideStories from './stories';

const FeedLeftSide = () => {
  return (
    <section>
      <FeedLeftSideStories />
      <FeedLeftSidePosts />
    </section>
  );
};

export default FeedLeftSide;
