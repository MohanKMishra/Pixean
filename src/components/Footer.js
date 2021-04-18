import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

let list = [
  { name: "Fashion", value: 300 },
  { name: "Travel", value: 300 },
  { name: "Street", value: 300 },
  { name: "Interior", value: 300 },
  { name: "Wedding", value: 300 },
  { name: "Pre-wedding", value: 300 },
  { name: "Fashion", value: 300 },
  { name: "Product", value: 300 },
];

const Footer = () => {
  return (
    <Container className="footer">
      <Container>
      <div className="footer_wrapper"> 
        <h2>Browse photogrphers in Mumbai</h2>
        <Row>
          {list.map((ele) => (
            <>
              <Col>
                {ele.name}({ele.value})
              </Col>
            </>
          ))}
        </Row>
      </div>
      </Container>
    </Container>
  );
};

export default Footer;
