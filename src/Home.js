import React,{useEffect,useState} from "react";
import Audiolist from "./Audiolist";
import "./home.css";
import useFetch from "./useFetch";
const Home = (props) => {
 
   
 const [audiofiles,setAudiofiles]=useState([]);
 const email=JSON.parse(localStorage.getItem('useraudify')).email;
 useEffect(()=>{
  fetch(`http://localhost:5000/audify?email=${email}`).then(res=>res.json()).then(data=>{
  console.log(data.audios[0].audioArray);  
  setAudiofiles(data.audios[0].audioArray)});
 },[])
  // const handleDelete = (id) => {
  //   const newAudios = audios.filter((audio) => audio.id !== id);
  //   setaudios(newAudios);
  // };
  return (
    <>
      <div style={props.blur}>
        <div className="home" style={props.home_style}>

          {audiofiles.audioArray && 
            <Audiolist
              audios={props.audiofiles}
              // handleDelete={handleDelete}
              wel_style={props.wel_style}
              my_style={props.my_style}
              title={props.title}
              popupfun={props.popupfun}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Home;
