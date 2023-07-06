import React,{useEffect} from "react";
import { Link } from "react-router-dom";
const Audiolist = (props) => {
  
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
        {props.audiofiles.map((audio) => {
          console.log(audio)
          return(
          <div className="Audio-preview" key={audio._id}>
            <div className="leftaudio">
              <Link className="link" to={`/audios/${audio._id}`}>
                <h2>{audio.filename}</h2>
              </Link>
            </div>
            <div className="rightaudio">
              {/* <p> Created by : {audio.author}</p> */}
              {/* <p> Last Modified : {audio.author}</p>
              <p> Duration :{audio.author}</p>
              <p> Comments : {audio.author}</p> */}
               <span >
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
          </div>)})}
       </div>
      
    </div>
  );
};

export default Audiolist;
