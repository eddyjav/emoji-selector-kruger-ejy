const EmojiButton = ({ emoji, onClick }) => {
  const handlerClick = () => {
    onClick(emoji);
  };

  return <button onClick={handlerClick}>{emoji.symbol}</button>;
};

export default EmojiButton;
