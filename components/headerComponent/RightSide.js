import Image from 'next/image';
import { HiHome, HiOutlinePlusCircle } from 'react-icons/hi';
import GeneralProfile from 'public/images/general-profile.webp';

const RightSide = () => {
  return (
    <div className="flex items-center space-x-4">
      <HiHome
        size={25}
        className="hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-200 ease-out"
      />
      <HiOutlinePlusCircle
        size={25}
        className="cursor-pointer hover:scale-125 transition-all duration-200 ease-out"
      />
      <div className="ml-1 cursor-pointer translate-y-[0.18rem] hover:scale-125 transition-all duration-200 ease-out">
        <Image
          src={GeneralProfile}
          width={30}
          height={30}
          alt="profile"
          className="object-contain rounded-full"
        />
      </div>
      {/* <div className="h-24 w-10 relative cursor-pointer">
      </div> */}
    </div>
  );
};

export default RightSide;
