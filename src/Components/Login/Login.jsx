import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, signIn, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.info("login success", { autoClose: 800 });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSign = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.info("login success", { autoClose: 800 });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.info("login success", { autoClose: 800 });
        form.reset();
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => toast.error(error.message, { autoClose: 800 }));
  };

  return (
    <div>
      <Container>
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p>login with social account</p>
          <ButtonGroup vertical>
            <Button
              onClick={handleGoogleSign}
              className="mb-2"
              variant="outline-primary"
            >
              {" "}
              <FaGoogle></FaGoogle> Login with Google
            </Button>
            <Button onClick={handleGithubSign} variant="outline-dark">
              {" "}
              <FaGithub></FaGithub> Login with Github
            </Button>
          </ButtonGroup>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link to="/register" className="">
              Sign up
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
