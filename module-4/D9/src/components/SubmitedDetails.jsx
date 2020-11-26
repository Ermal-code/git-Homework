import React from "react";
import logo from "../netflix-logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";

function SubmitedDetails(props) {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <img src={logo} alt="netflix" width="200" />
      </div>
      <div className="loginForm-bg2 pb-5">
        <div className="loginForm">
          <Container>
            <Row>
              <Col
                md={{ span: 6, offset: 3 }}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "15px",
                  padding: "30px 30px",
                }}
                className="border border-danger"
              >
                <h2 className="text-center">Is this detail correct</h2>
                <h4>
                  <strong className="text-danger">Name: </strong>
                  {props.myInfo.name}
                </h4>
                <h4>
                  <strong className="text-danger">Surname: </strong>
                  {props.myInfo.surname}
                </h4>
                <h4>
                  <strong className="text-danger">Email: </strong>
                  {props.myInfo.email}
                </h4>
                <h4>
                  <strong className="text-danger">Password: </strong>
                  {props.myInfo.password}
                </h4>
                <h4>
                  <strong className="text-danger">Year of birth: </strong>
                  {props.myInfo.yearOfBirth}
                </h4>
                <h4>
                  <strong className="text-danger">Street adress: </strong>
                  {props.myInfo.streetAddress}
                </h4>
                <h4>
                  <strong className="text-danger">City: </strong>
                  {props.myInfo.city}
                </h4>
                <h4>
                  <strong className="text-danger">Postal code</strong>
                  {props.myInfo.postalCode}
                </h4>
                <h4>
                  <strong className="text-danger">Credit card</strong>
                  {props.myInfo.crediCard}
                </h4>
                <div className="d-flex justify-content-around mt-5">
                  <Button
                    variant="warning"
                    onClick={() => props.history.push("/")}
                  >
                    Go back
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => props.history.push("/home")}
                  >
                    Confirm
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SubmitedDetails;
