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
          emoji.slug.toLowerCase().includes(q) ||
          emoji.unicodeName.toLowerCase().includes(q)
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

    inputRef.current.value = prev + emoji.character + next;
    inputRef.current.selectionStart = cursosPosition + emoji.character.length;
    inputRef.current.selectionEnd = cursosPosition + emoji.character.length;
    inputRef.current.focus();
  };
  console.log(emojis);

  return (
    <div ref={containerRef}>
      <button className="btn-emoji" onClick={handleClickOpen}>
        {/* <i className="fa fa-smile-o fa-2x"></i> */}
        {/* <i className="fa-regular fa-face-laugh fa-2x"></i> */}
        <i>
          <span className="material-symbols-rounded">add_reaction</span>
        </i>
      </button>
      {isOpen ? (
        <div className="container-emoji-search-b">
          <EmojiSearch onSearch={handleSearch} />
          <div>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.slug}
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
