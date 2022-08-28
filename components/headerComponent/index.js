import LeftSide from './LeftSide';
import Middle from './Middle';
import RightSide from './RightSide';

const HeaderComponent = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <LeftSide />
        {/* Middle */}
        <Middle />
        {/* Right */}
        <RightSide />
      </div>
    </div>
  );
};

export default HeaderComponent;
