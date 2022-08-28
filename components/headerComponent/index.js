import LeftSide from './LeftSide';
import Middle from './Middle';

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* Left */}
      <LeftSide />
      {/* Middle */}
      <Middle />
      {/* Right */}
      <h1>Right Side</h1>
    </div>
  );
};

export default HeaderComponent;
