import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <Container>
        <h2 className="blog_heading">Question & Answer</h2>
        <div>
          <p>
            <span>Q:</span> what is cors?
          </p>
          <p>
            <span>Ans:</span> CORS is shorthand for Cross-Origin
            ResourceSharing. It is a mechanism to allow or restrict requested
            resources on a web server depend on where the HTTP request was
            initiated. This policy is used to secure a certain web server from
            access by other website or domain. For example, only the allowed
            domains will be able to access hosted files in a server such as a
            stylesheet, image, or a script.
          </p>
        </div>
        <div>
          <p>
            <span>Q:</span> Why are you using firebase?
          </p>
          <p>
            <span>Ans:</span> Firebase is a product of Google which helps
            developers to build, manage, and grow their apps easily. It helps
            developers to build their apps faster and in a more secure way. No
            programming is required on the firebase side which makes it easy to
            use its features more efficiently. . It provides services to
            android, ios, web, and unity. It provides cloud storage. It uses
            NoSQL for the database for the storage of data.
          </p>
          <p>
            <span>Q:</span> What other options do you have to implement
            authentication?
          </p>
          <p>
            <span>Ans:</span> Some Alternatives to Firebase Authentication ...
            <li>
              Auth0. A set of unified APIs and tools that instantly enables
              Single Sign On and user management to all your applications.
            </li>
            <li>
              MongoDB. MongoDB stores data in JSON-like documents that can vary
              in structure, offering.
            </li>
            <li>Passport. </li>
            <li>Okta.</li>
            <li>JSON Web Token.</li>
            <li>Keycloak.</li>
            <li>Amazon Cognito.</li>
          </p>
        </div>
        <div>
          <p>
            <span>Q:</span> How does the private route work?
          </p>
          <p>
            <span>Ans:</span> The react private route component renders child
            components ( children ) if the user is logged in. If not logged in
            the user is redirected to the /login page with the return url passed
            in the location state property. Private Routes in React Router (also
            called Protected Routes) require a user being authorized to visit a
            route (read: page). So if a user is not authorized for a specific
            page, they cannot access it. The most common example is
            authentication in a React application where a user can only access
            the protected pages when they are authorized (which means in this
            case being authenticated). Authorization goes beyond authentication
            though. For example, a user can also have roles and permissions
            which give a user access to specific areas of the application.
          </p>
        </div>
        <div>
          <p>
            <span>Q:</span> What is Node? How does Node work?
          </p>
          <p>
            <span>Ans:</span>
            <li>Node.js is an open source server environment</li>{" "}
            <li>Node.js is free</li>{" "}
            <li>
              Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X,
              etc.)
            </li>
            <li>Node.js uses JavaScript on the server</li>
            <li>Asynchronous and Event Driven</li>
            <li>Very Fast</li>
            <li>Single Threaded but Highly Scalable</li>
            <li>No Buffering</li>
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
