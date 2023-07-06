import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Audiolist = (props) => {
  const [audiofiles, setAudiofiles] = useState([]);
  const email = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`http://localhost:5000/audify?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.audio);
        setAudiofiles(data.audio);
      });
  }, []);
  return (
    <div className="audio-list">
      <div className="welcome" style={props.wel_style}>
        <h1 style={props.my_style}>Welcome to {props.title}</h1>
      </div>
      <div className="main">
        <div className="up">
          <p style={props.my_style}>Here are your recent Audio Files :</p>
          <button className="new_audio" onClick={props.popupfun}>
            Create New
          </button>
        </div>
        {audiofiles.map((audio) => {
          console.log(audio);
          return (
            <div className="Audio-preview" key={audio._id}>
              <div className="leftaudio">
                <Link className="link" to={`/audios/${audio._id}`}>
                  <h2>{audio.title}</h2>
                </Link>
              </div>
              <div className="rightaudio">
                <p> Created by : {audio.author}</p>
                <p> Created on : {audio.date.slice(0, 10)}</p>
                <p> Comments : {audio.comment}</p>
                <span>
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Audiolist;
