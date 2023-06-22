import Popup from "./Popup";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Audiodetails from "./Audiodetails";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
function App() {
  const [mode, setmode] = useState("light");
  const [popup, setpopup] = useState(false);
  const [my_style, set_style] = useState({
    color: "#3512fa",
  });
  const [home_style, set_home_style] = useState({
    borderColor: "#04ba1c",
  });
  const [wel_style, set_wel_style] = useState({
    borderColor: "black",
  });
  const [blur, set_blur] = useState({
    filter: "none",
  });
  // functions
  const popupfun = () => {
    setpopup(true);
    set_blur({ filter: " blur(5px)" });
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      set_style({ color: "white" });
      document.body.style.backgroundColor = "rgb(74 121 158)";
      set_home_style({ borderColor: "#4fda7b" });
      set_wel_style({ borderColor: "#4fda7b" });
    } else {
      setmode("light");
      set_style({ color: "#3512fa" });
      document.body.style.backgroundColor = "white";
      set_home_style({ borderColor: "#04ba1c" });
      set_wel_style({ borderColor: "rgb(108 13 13)" });
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <div>
                  <Popup trigger={popup} settrigger={setpopup} setblur={set_blur}/>
                </div>
                <div>
                  <Navbar title="Audify" togglemode={togglemode} blur={blur}  />
                  <Home
                    title="Audify"
                    my_style={my_style}
                    home_style={home_style}
                    wel_style={wel_style}
                    popupfun={popupfun}
                    blur={blur}
                  />
                </div>
              </div>
            }
          ></Route>
          <Route
            exact
            path="/convert"
            element={
              <div>
                <Navbar title="Audify" togglemode={togglemode} />
                <Create />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <div>
                <Navbar title="Audify" togglemode={togglemode} />
                <About />
              </div>
            }
          ></Route>
          <Route exact path="/audios/:id" element={<Audiodetails />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
