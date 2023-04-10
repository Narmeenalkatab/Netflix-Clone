
import { Link } from "react-router-dom";
import Navbar  from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



export default function NavBar(){

return (
  <>
    <Navbar bg="blue" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="nav1">
          <Nav.Link as={Link} to="/favoritelist">
            Favorite List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
}