import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <div>
      <Container>
        <Jumbotron fluid className="mt-5 rounded bg-warning">
          <Container>
            <h1>Welcome to Strive Book Store</h1>
            <p>
              This is the best book store you can find online. All the new
              releases , best sellers and the oldest books you can find online.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default MyJumbotron;
