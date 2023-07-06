import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Audiolist = (props) => {
  const [audiofiles, setAudiofiles] = useState([]);
  
  const user = JSON.parse(localStorage.getItem("useraudify"));

  const email=user.email;
  console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/audify?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if(data==="no audios")
        {
          setAudiofiles(data);
        }
        else{
          console.log(data.audio);
        setAudiofiles(data.audio);
        }
        
      });
  }, []);
  if(audiofiles=="no audios")
  {
    return(
      <>
        <div className="audio-list">
      <div className="welcome" style={props.wel_style}>
      {/* <h1 style={props.my_style}>Hey! {name}</h1> */}
        <h1 style={props.my_style}>Welcome to {props.title}</h1>
      </div>
      <div className="main">
        <div className="up">
          <p style={props.my_style}>You have currently no audio files! :</p>
          <button className="new_audio" onClick={props.popupfun}>
            Create New
          </button>
        </div>
        </div>
        </div>
      </>
      
    )
  }
else{
  const newarray=audiofiles.reverse();
  console.log(newarray);
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
        <div style={{"height":"90vh","overflowY":"scroll"}}>
        {
          audiofiles.toReversed().map((audio) => {
          console.log(audio);
          return (
            <div className="Audio-preview" key={audio._id}>
              <div className="leftaudio">
                <Link className="link" to={`/audios/${audio._id}`}>
                  <h2>{audio.title}</h2>
                </Link>
              </div>
              <div className="rightaudio">
                <p style={{"fontSize":"20px","fontWeight":"600","color":"blueviolet"}}> Created by : {audio.author}</p>
                <p style={{"fontSize":"20px","fontWeight":"600","color":"blueviolet"}}> Created on : {audio.date.slice(0, 10)}</p>
                <p style={{"fontSize":"20px","fontWeight":"600","color":"blueviolet"}}> Comments : {audio.comment}</p>
                <span>
                  <i style={{"fontSize":"15px","fontWeight":"600","color":"red"}} className="fa-solid fa-trash-can"></i>
                </span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
      }
};

export default Audiolist;
