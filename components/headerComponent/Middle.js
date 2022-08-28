import { IoSearchOutline } from 'react-icons/io5';
const Middle = () => {
  return (
    <div className="relative mt-1">
      <div className="absolute top-2 left-2">
        <IoSearchOutline className="h-5 text-gray-500 " />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
      />
    </div>
  );
};

export default Middle;
