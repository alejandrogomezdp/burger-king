import React from "react";
import "./App.css";
import "./index.css";
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "./components/img/burger-king-logo.svg";

function App() {
  return (
    <><div className="header2">
      <div className="nav-bar">
        <img className="Logo" src={Logo} alt="BK-Logo" />
        <ul>
          <a className="header-a" href="https://www.google.com">Home</a>
          <a className="header-a" href="#1">Pages</a>
          <a className="header-a" href="#2">Portfolio</a>
          <a className="header-a" href="#3">Elements</a>
          <a className="header-a" href="#4">Blog</a>
          <a className="header-a" href="#5">Shop</a>
          <FontAwesomeIcon icon={faFacebook} color="black" className="fb" />
          <FontAwesomeIcon icon={faInstagram} color="black" className="ig" />
          <FontAwesomeIcon icon={faTwitter} color="black" className="tw" />
        </ul>
      </div>
      <h1 className="header-h1">Burger King</h1>
      <h2 className="header-h2">THE BEST BURGER</h2>
      <button className="header-button">ORDER NOW</button>
      </div></>
  );
}

export default App;
