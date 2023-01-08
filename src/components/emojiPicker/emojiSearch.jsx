import { useState } from "react";

const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };

  return (
    <input
      className="i-search-emoji form-control"
      type="text"
      onChange={handleChange}
      value={value}
      placeholder="Buscar"
    />
  );
};

export default EmojiSearch;
