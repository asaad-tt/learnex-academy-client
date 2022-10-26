import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Button, Image } from "react-bootstrap";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(toast.success("successfully logout", { autoClose: 800 }))
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      className="mb-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Learnex Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogout} variant="light">
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
