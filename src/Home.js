import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Audiolist from "./Audiolist";
import "./home.css";
const Home = (props) => {
  const [audios, setaudios] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (id) => {
    const newAudios = audios.filter((audio) => audio.id !== id);
    setaudios(newAudios);
  };
  useEffect(() => {
    fetch("http://localhost:8000/audios")
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry Could not fetch the data!!");
        }
        return res.json();
      })
      .then((data) => {
        setaudios(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <>
      <div className="home" style={props.home_style}>
        {error && <div className="error">{error}</div>}
        {isPending && <div>loading....</div>}
        {audios && (
          <Audiolist
            audios={audios}
            handleDelete={handleDelete}
            wel_style={props.wel_style}
            my_style={props.my_style}
          />
        )}
      </div>
    </>
  );
};

export default Home;
