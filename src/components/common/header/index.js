import React from "react";
import "../header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        className="header-logo"
        alt="Zomato-logo"
      />
      <div className="header-left">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
