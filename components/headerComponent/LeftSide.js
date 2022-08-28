import Image from 'next/image';
import InstaLogo from 'public/logo/Instagram_logo.png';
import InstaLogoMobile from 'public/logo/Instagram_logo_2016.webp';

const LeftSide = () => {
  return (
    <>
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          src={InstaLogo}
          layout="fill"
          alt="instagram"
          className="object-contain"
        />
      </div>
      <div className="h-24 w-10 relative lg:hidden cursor-pointer">
        <Image
          src={InstaLogoMobile}
          layout="fill"
          alt="instagram"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default LeftSide;
