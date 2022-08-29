/* eslint-disable @next/next/no-img-element */
const SuggestionItem = ({ suggestion }) => {
  return (
    <div className="flex items-center justify-between">
      <img
        src={suggestion?.img}
        alt={suggestion?.username}
        className="h-10 rounded-full p-[1.5px] cursor-pointer hover:scale-110 transition-all duration-200 ease-out"
      />
      <div className="flex-1 ml-3">
        <h2 className="font-semibold text-gray-600 md:text-sm lg:text-base cursor-pointer">
          {suggestion?.username}
        </h2>
        <h3 className="text-sm text-gray-400 md:text-xs lg:text-sm">
          {suggestion?.jobTitle}
        </h3>
      </div>
      <button className="text-sm text-blue-400 md:text-sm lg:text-base">
        Follow
      </button>
    </div>
  );
};

export default SuggestionItem;
