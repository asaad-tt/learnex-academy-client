import React from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { signInWithGoogle, createUser, updateName } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // update user name
        updateName(name, photoURL)
          .then(() => {
            toast.success("name updated", { autoClose: 800 });
          })
          .catch((error) => {
            toast.error(error.message);
          });
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photoURL"
              type="text"
              placeholder="Enter your photo URL"
            />
          </Form.Group>
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
            Register
          </Button>
        </Form>
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSign}
            className="mb-2"
            variant="outline-primary"
          >
            {" "}
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
        <p className="px-6 text-sm text-center ">
          Already have an account yet?{" "}
          <Link to="/login" className="">
            Sign In
          </Link>
          .
        </p>
      </div>
    </Container>
  );
};

export default Register;
