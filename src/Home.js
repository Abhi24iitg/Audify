import React from "react";
import Audiolist from "./Audiolist";
import "./home.css";
import useFetch from "./useFetch";
const Home = (props) => {
  const {
    data: audios,
    setData: setaudios,
    isPending,
    error,
  } = useFetch("http://localhost:5000/audios");
  const handleDelete = (id) => {
    const newAudios = audios.filter((audio) => audio.id !== id);
    setaudios(newAudios);
  };
  return (
    <>
      <div style={props.blur}>
        <div className="home" style={props.home_style}>
          {error && <div className="error">{error}</div>}
          {isPending && <div>loading....</div>}
          {audios && (
            <Audiolist
              audios={audios}
              handleDelete={handleDelete}
              wel_style={props.wel_style}
              my_style={props.my_style}
              title={props.title}
              popupfun={props.popupfun}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
