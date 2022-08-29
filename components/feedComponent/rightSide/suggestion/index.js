import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import SuggestionItem from './SuggestionItem';

const FeedRightSideSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    let suggestionArr = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));

    setSuggestions(suggestionArr);
  }, []);

  console.log(suggestions);

  return (
    <div className="mt-5  md:w-60 lg:w-72">
      <div className="flex justify-between mb-3 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion For You</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions?.map((suggestion, index) => (
        <SuggestionItem key={index} suggestion={suggestion} />
      ))}
    </div>
  );
};

export default FeedRightSideSuggestion;
