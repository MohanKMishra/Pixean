import { Button, Navbar, Nav, Container } from "react-bootstrap";

const ButtonComp = ({ active, item, setActive, variant }) => {
  return (
    <Button variant={variant} size="sm" onClick={() => setActive(item)}>
      {item}
    </Button>
  );
};

export default ButtonComp;
