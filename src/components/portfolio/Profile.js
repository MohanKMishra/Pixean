import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStreetView,
  faStar,
  faAd,
  faAmbulance,
  faSmog,
  faCaretSquareDown,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import "./profile.css";
import data from "../../data/portfolioDeails.json";

const Profile = () => {
  return (
    <Col md={4}>
      <Image src={data.avatar} alt={data.name} roundedCircle />
      <h2 className="name_user">{data.name}</h2>
      <h4 className="user_location">
        <FontAwesomeIcon icon={faStreetView} />
        {data.location}
      </h4>
      <Button className="bttn">Send Enquiry</Button>
      <div className="about">
        <h2>About me</h2>
        <p>{data.description}</p>
        {data.equipments.map((e) => (
          <Equipments key={e.eqipName} item={e} />
        ))}

        <h1 className="review">{data.views}</h1>
        <h4 className="pro_view">Profile Views</h4>
        <h1 className="rating">
          {data.rating.total}
          <FontAwesomeIcon icon={faStar} />
        </h1>
        <h4 className="rating_view">
          {data.rating.rater} Ratings & {data.rating.reviewer} Reviews
        </h4>
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
    </Col>
  );
};

const Equipments = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.eqipName} className="lens_logo" />
      <h3 className="camera_det">{item.eqipName}</h3>
    </>
  );
};

export default Profile;
