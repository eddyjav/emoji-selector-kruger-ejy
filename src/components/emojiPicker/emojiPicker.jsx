import { forwardRef, useEffect, useRef, useState } from "react";
import { data as emojiList } from "./data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

const EmojiPicker = (props, inputRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(...emojiList);

  const containerRef = useRef(null);

  useEffect(() => {
    setEmojis(emojiList); //!agregado
    window.addEventListener("click", (e) => {
      if (
        !containerRef.current?.contains(e.target) &&
        !inputRef.current?.contains(e.target) //!!agreagada evaluacion
      ) {
        setIsOpen(false);
        setEmojis(emojiList);
      }
    });
  }, []);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  // const EmojiPickerContainer = () => {
  //   return (
  //     <div>
  //       <EmojiSearch onSearch={handleSearch} />
  //       <div>
  //         {emojis.map((emoji) => (
  //           <div key={emoji.symbol}>{emoji.symbol}</div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const handleOnclickEmoji = (emoji) => {
    const cursosPosition = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursosPosition);
    const next = text.slice(cursosPosition);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursosPosition + emoji.symbol.length;
    inputRef.current.selectionEnd = cursosPosition + emoji.symbol.length;
    inputRef.current.focus();
  };
  console.log(emojis);

  return (
    <div ref={containerRef}>
      <button onClick={handleClickOpen}>🖖</button>
      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch} />
          <div>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleOnclickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default forwardRef(EmojiPicker);
