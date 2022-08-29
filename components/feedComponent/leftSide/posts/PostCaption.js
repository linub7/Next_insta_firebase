const PostCaption = ({ username, caption }) => {
  return (
    <p className="p-5 truncate">
      <span className="font-bold mr-2">{username}</span>
      {caption}
    </p>
  );
};

export default PostCaption;
