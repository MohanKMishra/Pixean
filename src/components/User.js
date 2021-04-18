import { Button, Col, Row, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Name goes here</h1>
          <div>
            <FontAwesomeIcon icon={faStreetView} />
            Navi Mumbai
          </div>
          <Button variant="primary">Send Enquiry</Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default User;
