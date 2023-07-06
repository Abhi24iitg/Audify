import React, { useState } from "react";
import "./audify.css";

function Audify(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    author: "",
    title: "",
    comment: "",
  });
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("comment", data.comment);
    console.log(formData);

    const email = JSON.parse(localStorage.getItem("useraudify")).email;
    try {
      const response = await fetch(
        `http://localhost:5000/audify?email=${email}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Create a link element and click it to initiate the file download
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "output.mp3";
        link.click();
      } else {
        console.error("Conversion failed:", response.statusText);
      }
    } catch (error) {
      console.error("Conversion failed:", error);
    }
  };

  return props.trigger ? (
    <div className="audify">
      <div>
        <h1>The audio file will be downloaded</h1>
        <p className="_title">Title</p>
        <input
          className="_input"
          onChange={handleData}
          name="title"
          type="text"
        />
        <p className="_author">Author</p>
        <input
          className="_input"
          onChange={handleData}
          name="author"
          type="text"
        />
        <p className="_comment">Comment</p>
        <input
          className="_input"
          onChange={handleData}
          name="comment"
          type="text"
        />
        <input
          className="choosefile"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <button
          className="convertbutton"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Convert
        </button>
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
    </div>
  ) : (
    ""
  );
}

export default Audify;
