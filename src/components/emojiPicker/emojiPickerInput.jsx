import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import "../../styles/styles.css";
import { useState } from "react";

const EmojiPickerInput = () => {
  const refInput = useRef(null);

  const [msg, setMsg] = useState("Hola");
  const [send, setSend] = useState(".....");

  const handleChange = (e) => {
    const value = e.target.value;
    setMsg(value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setSend(msg);
    document.getElementById("comment").value = "";
  };

  return (
    <div className="emoji-body">
      {/* <input ref={refInput} />
      <EmojiPicker ref={refInput} /> */}

      <div className="row">
        <div className="row message-body">
          <div className="col-sm-12 message-main-receiver">
            <div className="receiver">
              <div className="message-text">Hola KrugerStar! como estas</div>
              <span className="message-time pull-right">19:47</span>
            </div>
          </div>
        </div>

        <div className="row message-body">
          <div className="col-sm-12 message-main-sender">
            <div className="sender">
              <div className="message-text">{send}</div>
              <span className="message-time pull-right">19:50</span>
            </div>
          </div>
        </div>

        <div className="row  reply">
          <div className="col-sm-1 col-xs-1 reply-emojis">
            <EmojiPicker ref={refInput} />
            {/* <i className="fa fa-smile-o fa-2x"></i> */}
          </div>
          <form onSubmit={handleForm}>
            <div className="col-sm-9 col-xs-9 reply-main">
              <input
                ref={refInput}
                className="form-control"
                rows="1"
                id="comment"
                onChange={handleChange}
                placeholder="Escribe algo"
              />
            </div>
            <div className="col-sm-1 col-xs-1 reply-recording">
              <i>
                <span className="material-symbols-rounded">attach_file</span>
              </i>
            </div>
          </form>

          <div className="col-sm-1 col-xs-1 reply-send">
            <i>
              <span className="material-symbols-sharp">photo_camera</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiPickerInput;
