import Image from 'next/image';
import GeneralProfile from 'public/images/general-profile.webp';

const FeedRightSideMiniProfile = () => {
  return (
    <div className="flex items-center space-x-7">
      <div className="cursor-pointer translate-y-1 hover:scale-110 transition-all duration-200 ease-out">
        <Image
          src={GeneralProfile}
          width={45}
          height={45}
          alt="profile"
          className="object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="font-bold">Muhammad Hadi</h1>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 hover:font-semibold hover:text-blue-600 hover:underline transition-all duration-200 ease-out">
        Sign out
      </button>
    </div>
  );
};

export default FeedRightSideMiniProfile;
