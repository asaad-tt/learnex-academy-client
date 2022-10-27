import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Button, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState } from "react";
import "./Header.css";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import logo from "./image2vector.svg";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("successfully logout", { autoClose: 800 });
        navigate("/login");
      })

      .catch((error) => console.log(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top me-1"
          alt=""
        />
        <Link className="logo_name" to="/">
          Learnex Academy
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu">
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
          <Nav className="user">
            <Nav.Link eventKey={2}>
              {user?.photoURL ? (
                <Image
                  title={user?.displayName}
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
            <Nav.Link className="log">
              {user?.uid ? (
                <>
                  {/* <span>{user?.displayName}</span> */}
                  <Button onClick={handleLogout} variant="light">
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link className="login" to="/login">
                    Login
                  </Link>
                  <Link className="register" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link onClick={toggleHandler} as={Link}>
              {toggle ? (
                <Button variant="light">Light</Button>
              ) : (
                <Button variant="dark">Dark</Button>
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none ">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
