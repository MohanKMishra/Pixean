import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAd,
  faAmbulance,
  faSmog,
  faCaretSquareDown,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

// import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h2>About me</h2>
      <p></p>
      <img src="" alt="camera_logo" className="camera_logo" />
      <h3 className="camera_det">Hasselblad 500 C/M, Nikon D7000</h3>

      <h1 className="review">1.5K</h1>
      <h4 className="pro_view">Profile Views</h4>
      <h1 className="rating">
        4.4
        <FontAwesomeIcon icon={faStar} />
      </h1>
      <h4 className="rating_view">77 Ratings & 11 Reviews</h4>
      <div className="icons">
        <FontAwesomeIcon className="icon1" icon={faStar} />
        <FontAwesomeIcon className="icon1" icon={faAd} />
        <FontAwesomeIcon className="icon1" icon={faAmbulance} />
        <FontAwesomeIcon className="icon1" icon={faBuilding} />
        <FontAwesomeIcon className="icon1" icon={faCaretSquareDown} />
        <FontAwesomeIcon className="icon1" icon={faSmog} />
      </div>
      <h4 className="social">Social Profiles</h4>
      <div className="logo">
        <FontAwesomeIcon icon={faSmog} />
      </div>
      <div className="link">
        <a href="#">www.webistenamegoeshere.com</a>
        <div className="hr"></div>
      </div>
    </div>
  );
};

const Equipments = ({ data }) => {
  return (
    <>
      <img src="" alt="lens_logo" className="lens_logo" />
      <h3 className="camera_det">
        Carl Zeiss Planer 2.8/f 80mm and Prism View Finder
      </h3>
    </>
  );
};

export default About;
