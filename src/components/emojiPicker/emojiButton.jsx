const EmojiButton = ({ emoji, onClick }) => {
  const handlerClick = () => {
    onClick(emoji);
  };

  return (
    <button className="search-emoji-b" onClick={handlerClick}>
      {emoji.character}
    </button>
  );
};

export default EmojiButton;
