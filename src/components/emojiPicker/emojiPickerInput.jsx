import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import "../../styles/styles.css";

const EmojiPickerInput = () => {
  const refInput = useRef(null);

  return (
    <div>
      <input ref={refInput} />
      <EmojiPicker ref={refInput} />

      <div className="row">
        <div class="row message-body">
          <div class="col-sm-12 message-main-receiver">
            <div class="receiver">
              <div class="message-text">Hola KrugerStar! como estas</div>
              <span class="message-time pull-right">Sun</span>
            </div>
          </div>
        </div>

        <div className="row message-body">
          <div className="col-sm-12 message-main-sender">
            <div className="sender">
              <div className="message-text">I am doing nothing man!</div>
              <span className="message-time pull-right">Sun</span>
            </div>
          </div>
        </div>

        <div className="row  reply">
          <div className="col-sm-1 col-xs-1 reply-emojis">
            <EmojiPicker ref={refInput} />
            {/* <i className="fa fa-smile-o fa-2x"></i> */}
          </div>
          <div className="col-sm-9 col-xs-9 reply-main">
            <textarea
              ref={refInput}
              className=""
              rows="1"
              id="comment"
            ></textarea>
          </div>
          <div className="col-sm-1 col-xs-1 reply-recording">
            <i>
              <span className="material-symbols-rounded">attach_file</span>
            </i>
          </div>
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
