import Popup from "./popup";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import About from "./About";
import Audiodetails from "./Audiodetails";
import Audify from "./Audify";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Audios from "./Audiofiles";


function App() {
const[data,setData]=useState({});


useEffect(() => {
    // const user_after_every_load=
   const data =JSON.parse(localStorage.getItem("useraudify"))
    setData(data);
    console.log(data);
    
  }, []);
 
 
  const [mode, setMode] = useState("light");
  const [popup, setPopup] = useState(false);
  const [myStyle, setStyle] = useState({
    color: "#3512fa",
  });
  const [homeStyle, setHomeStyle] = useState({
    borderColor: "#04ba1c",
  });
  const [welStyle, setWelStyle] = useState({
    borderColor: "black",
  });
  const [blur, setBlur] = useState({
    filter: "none",
  });

  // Functions
  const popupfun = () => {
    setPopup(true);
    setBlur({ filter: "blur(5px)" });
  };
  const updateUser = (user) => {
    setData(user);
    localStorage.setItem("useraudify", JSON.stringify(user));
  
    // console.log(user);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setStyle({ color: "white" });
      document.body.style.backgroundColor = "rgb(74, 121, 158)";
      setHomeStyle({ borderColor: "#4fda7b" });
      setWelStyle({ borderColor: "#4fda7b" });
    } else {
      setMode("light");
      setStyle({ color: "#3512fa" });
      document.body.style.backgroundColor = "white";
      setHomeStyle({ borderColor: "#04ba1c" });
      setWelStyle({ borderColor: "rgb(108, 13, 13)" });
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login updateUser={updateUser}  />} />
          <Route
            exact
            path="/"
            element={
            data?
              (<div>
                <div>
                  <Navbar title="Audify" togglemode={toggleMode} blur={blur} updateUser={updateUser} />
                  {/* <Home
                    title="Audify"
                    my_style={myStyle}
                    home_style={homeStyle}
                    wel_style={welStyle}
                    popupfun={popupfun}
                    blur={blur}
                  /> */}
                  <Audify/>
                
                  <div>
                    {/* <Audify /> */}
                  </div>
                </div>
              </div>)
            :(<Login  />)}
          />
          {/* <Route
            exact
            path="/about"
            element={
              <div>
                <Navbar title="Audify" togglemode={toggleMode} />
                <About />
              </div>
            }
          /> */}
          {/* <Route exact path="/audios/:id" element={<Audiodetails />} /> */}
          {/* <Route
            exact
            path="/upload"
            element={
              <div>
                <Navbar title="Audify" togglemode={toggleMode} />
                <div>
                  <h1>Uploads Page</h1>
                </div>
              </div>
            }
          /> */}
         
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
