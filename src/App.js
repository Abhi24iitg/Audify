import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [my_style, set_style] = useState({
    color: "#3512fa",
  });
  const [home_style, set_home_style] = useState({
    borderColor: "#04ba1c",
  });
  const [wel_style, set_wel_style] = useState({
    borderColor: "black",
  });
  // functions
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
        <Navbar title="Audify" togglemode={togglemode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                title="Audify"
                my_style={my_style}
                home_style={home_style}
                wel_style={wel_style}
              />
            }
          ></Route>
          <Route exact path="/convert" element={<Create />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
