import React, { useState, Fragment } from "react";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Photo from "./components/Photo";
import Youtube from "./components/youtube/Youtube";

const App = () => {
  const [current, setCurrent] = useState("translate");
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <span className="navbar-brand">
          <i className="fas fa-wrench"></i> Widgets
        </span>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${current === "translate" ? "active" : ""}`}
            >
              <span
                className="nav-link"
                onClick={() => {
                  setCurrent("translate");
                }}
              >
                Translate
              </span>
            </li>

            <li className={`nav-item ${current === "wiki" ? "active" : ""}`}>
              <span
                className="nav-link"
                onClick={() => {
                  setCurrent("wiki");
                }}
              >
                Wiki
              </span>
            </li>

            <li className={`nav-item ${current === "photo" ? "active" : ""}`}>
              <span
                className="nav-link"
                onClick={() => {
                  setCurrent("photo");
                }}
              >
                Photo
              </span>
            </li>

            <li className={`nav-item ${current === "youtube" ? "active" : ""}`}>
              <span
                className="nav-link"
                onClick={() => {
                  setCurrent("youtube");
                }}
              >
                Youtube
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        {current === "translate" && <Translate />}
        {current === "wiki" && <Search />}
        {current === "photo" && <Photo />}
        {current === "youtube" && <Youtube />}
      </div>
    </Fragment>
  );
};

export default App;
