import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./home/Home.jsx";
import Nav from "./common/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Portfolio from "./home/Portfolio.jsx";
function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Router>
        <div
          className={`container-fluid ${isDropdownOpen ? "nav-active" : ""}`}
        >
          <button
            className="navbar-toggler position-fixed d-lg-none"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav shown={isDropdownOpen} />
          <div className="col-sm-12 col-lg-10 offset-lg-2">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home setIsDropdownOpen={setIsDropdownOpen} />
                  </>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <>
                    <Portfolio setIsDropdownOpen={setIsDropdownOpen}/>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
