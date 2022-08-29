import FeedRightSideMiniProfile from './MiniProfile';
import FeedRightSideSuggestion from './suggestion';

const FeedRightSide = () => {
  return (
    <div className="fixed w-full mt-8 ml-3">
      {/* Mini Profile */}
      <FeedRightSideMiniProfile />
      {/* Suggestion */}
      <FeedRightSideSuggestion />
    </div>
  );
};

export default FeedRightSide;
