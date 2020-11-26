import React from "react";
import logo from "../netflix-logo.png";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

class SingupForm extends React.Component {
  state = {
    addInfo: {
      name: "",
      surname: "",
      email: "",
      password: "",
      yearOfBirth: 2020,
      streetAddress: "",
      city: "",
      postalCode: "",
    },
    submitState: false,
  };

  updateSingupField = (e) => {
    let addInfo = { ...this.state.addInfo };
    let currentId = e.currentTarget.id;

    addInfo[currentId] = e.currentTarget.value;

    this.setState({ addInfo });
  };

  // componentDidUpdate = (previousProps, previousState) => {

  //   for()
  // };

  componentDidUpdate = (previousProps, previousState) => {
    for (let key in this.state.addInfo) {
      if (
        this.state.addInfo[key] !== "" &&
        previousState.addInfo[key] !== this.state.addInfo[key]
      ) {
        this.setState({ submitState: true });
      }
    }
  };

  submitInfo = (e) => {
    e.preventDefault();

    this.setState({
      addInfo: {
        name: "",
        surname: "",
        email: "",
        password: "",
        yearOfBirth: 2020,
        streetAddress: "",
        city: "",
        postalCode: "",
      },
      submitState: false,
    });
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center mb-5">
          <img src={logo} alt="netflix" width="200" />
        </div>
        <div className="loginForm-bg mb-5">
          <div className="loginForm">
            <Container>
              <Row>
                <Col
                  className="my-5 "
                  md={{ span: 8, offset: 2 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow:
                      "inset 7px 5px 8px #c7c5c5, inset -7px -5px 8px #c7c5c5",
                  }}
                >
                  <Form
                    className="my-5 px-5 d-flex  justify-content-around"
                    onSubmit={this.submitInfo}
                    style={{
                      width: "100%",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Row style={{ width: "100%" }}>
                      <Col md={5}>
                        <Form.Group>
                          <Form.Label htmlFor="name" className="text-dark">
                            Name
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            value={this.state.addInfo.name}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={5}>
                        <Form.Group>
                          <Form.Label htmlFor="surname" className="text-dark">
                            Surname
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="Your surname"
                            value={this.state.addInfo.surname}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }} className="mt-5">
                      <Col md={5}>
                        <Form.Group>
                          <Form.Label htmlFor="email" className="text-dark">
                            Email
                          </Form.Label>

                          <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            value={this.state.addInfo.email}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={5}>
                        <Form.Group>
                          <Form.Label htmlFor="password" className="text-dark">
                            Password
                          </Form.Label>

                          <Form.Control
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            value={this.state.addInfo.password}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }} className="mt-5">
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label
                            htmlFor="yearOfBirth"
                            className="text-dark"
                          >
                            Year of birth
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="yearOfBirth"
                            id="yearOfBirth"
                            min={1910}
                            max={2020}
                            placeholder="Year"
                            required
                            value={this.state.addInfo.yearOfBirth}
                            onChange={this.updateSingupField}
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={7}>
                        <Form.Group>
                          <Form.Label
                            htmlFor="streetAddress"
                            className="text-dark"
                          >
                            Street Address
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="streetAddress"
                            id="streetAddress"
                            placeholder="Your street adress"
                            value={this.state.addInfo.streetAddress}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }} className="mt-5">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="city" className="text-dark">
                            City
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Your city"
                            value={this.state.addInfo.city}
                            onChange={this.updateSingupField}
                            required
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label
                            htmlFor="postalCode"
                            className="text-dark"
                          >
                            Postal code
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="postalCode"
                            id="postalCode"
                            placeholder="Postal Code"
                            required
                            value={this.state.addInfo.postalCode}
                            onChange={this.updateSingupField}
                            className="mt-4"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="flex justify-content-center mt-5">
                      {this.state.submitState ? (
                        <Button variant="danger" type="submit">
                          Sing Up
                        </Button>
                      ) : (
                        <Button variant="danger" type="submit" disabled>
                          Sign Up
                        </Button>
                      )}
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default SingupForm;
