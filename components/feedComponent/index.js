import FeedLeftSide from './leftSide';
import FeedRightSide from './rightSide';

const FeedComponent = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <div className="md:col-span-2">
        {/* Left Side */}
        <FeedLeftSide />
      </div>
      <div className="hidden md:inline-grid md:col-span-1">
        {/* Right Side */}
        <FeedRightSide />
      </div>
    </main>
  );
};

export default FeedComponent;
