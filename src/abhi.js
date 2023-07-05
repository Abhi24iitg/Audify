import React, { useState } from "react";
import "./popup.css";

function Popup(props) {
  const [videoFile, setVideoFile] = useState(null);
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("videoLink", videoLink);
    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

    // Clear the form inputs
    setVideoFile(null);
    setVideoLink("");
  };

  return props.trigger ? (
    <div className="popup">
      <form onSubmit={handleSubmit} className="form_">
        <label className="label_">
          <h3>Upload Video File:</h3>
        </label>
        <input
          className="input-video"
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
        />
        <label className="label">
          <h3>Upload Link:</h3>
        </label>
        <input
          className="input-url"
          type="url"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <input className="submit_video" type="submit" value="Submit" />
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

