import React from "react";
const Audiolist = (props) => {
  return (
    <div className="audio-list">
      <div className="welcome" style={props.wel_style}>
        <h1 style={props.my_style}>Welcome to {props.title}</h1>
      </div>
      <div className="main">
        <p style={props.my_style}>Here are your recent Audio Files :</p>
        {props.audios.map((audio) => (
          <div className="Audio-preview" key={audio.id}>
            <div className="leftaudio">
              <h2>{audio.title}</h2>
            </div>
            <div className="rightaudio">
              <p> Created on : {audio.author}</p>
              <p> Last Modified : {audio.author}</p>
              <p> Duration :{audio.author}</p>
              <p> Comments : {audio.author}</p>
              <span onClick={() => props.handleDelete(audio.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audiolist;
