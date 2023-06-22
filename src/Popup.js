import React from "react";
import "./popup.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <form action="/action_page.php" className="form_">
        <label className="label_">
          <h3>Upload Video File:</h3>
        </label>
        <input className="input-video" type="file" accept="video/*" />
        <label className="label">
          <h3>Upload Link:</h3>
        </label>
        <input className="input-url" type="url" />
        <input className="submit_video" type="submit" />
      </form>
      <button
        className="closeBtn"
        onClick={() => {
          props.settrigger(false);
          props.setblur({
            filter: "none",
          });
        }}
      >
        Close
      </button>
    </div>
  ) : (
    ""
  );
}

export default Popup;
