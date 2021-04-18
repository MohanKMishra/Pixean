import React, { useState } from "react";

import img from "../../data/wallpaper.jpg";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./portfolio.css";
import ButtonComp from "../ButtonComp";
import Pictures from "../Pictures";
import Profile from "./Profile";

const arr = ["wedding", "landscape", "portrait", "nature"];

const Portfolio = () => {
  const [active, setActive] = useState("wedding");
  return (
    <div className="banner_wraapper">
      <div className="wal_wrapper">
        <div className="dark_matter"></div>
        <img src={img} className="wallpaper" alt="wallpaper" />
      </div>
      <Container>
        <Row xs={1} md={2}>
          <Profile />
          <Col md={7}>
            {arr.map((e) => (
              <ButtonComp
                item={e}
                active={active}
                setActive={setActive}
                variant={active === e ? "deactive" : "superdeaactive"}
              />
            ))}
            <h3 className="title1">Wedding photography</h3>
            <h4 className="title2">Prices Starts from ₹15,000</h4>
            <Row>
              <span>Keywords &nbsp; &nbsp;</span>
              <span>
                Make Up, Wedding Dress, Bride, Groom, Portraits, Couple Portaits
              </span>
            </Row>
            <Pictures />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
