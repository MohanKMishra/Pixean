import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./navigation.css";
import ButtonComp from "../ButtonComp";

const arr = ["Sign-In", "Sign-Up"];

const Navigation = () => {
  const [active, setActive] = useState("Sign-In");
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Nav>
          <img
            className="nav_image"
            src="https://www.pixean.com/uploads/icon/pixean-logo-rebranding"
            alt="not found"
          />
        </Nav>

        <Nav>
          {arr.map((e) => (
            <ButtonComp
              item={e}
              active={active}
              setActive={setActive}
              variant={active === e ? "primary" : "deactive"}
            />
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
