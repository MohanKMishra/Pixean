import React, { useState } from "react";
import "./picture.css";
import data from "../data/Images.json";
import ButtonComp from "./ButtonComp";
import PhotosVideos from "./PhotosVideos";
import { Col, Row } from "react-bootstrap";
const arr = ["Photos", "Videos"];

const Pictures = () => {
  const [active, setActive] = useState("wedding");

  return (
    <>
      <PhotosVideos />
      <Row>
        {data.map((e) => {
          return (
            <Col key={e.id} lg="3" md="4" sm="6" xs="6">
              <img className="gallary" src={e.img} alt="picture" />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Pictures;
