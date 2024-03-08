import React from "react";
import "../header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCaretDown,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        className="header-logo"
        alt="Zomato-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="absolute-center location-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <div>Tamilnadu</div>
            </div>
            <i className="absolute-center">
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </div>
          <div className="location-separator"></div>
          <div className="header-search-bar">
            <i className="absolute-center search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <input
              placeholder="search for restaurant"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            className="header-profile-image"
            alt="profile"
            src="https://b.zmtcdn.com/data/user_profile_pictures/956/7d6a2f8a8b3f623f66046cca95192956.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
          />
          <span className="header-username">Abishek</span>
          <i className="absolute-center profile-option-icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Header;
