import React from "react";
import logo from "../netflix-logo.png";
import { Form, Row, Col, Button, Container, Alert } from "react-bootstrap";

const rules = {
  name: (value) => value.length > 2,
  surname: (value) => value.length > 3,
  password: (value) => {
    const checkPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return checkPassword.test(value);
  },

  postalCode: (value) => value.length === 5 && !isNaN(value),
  creditCard: (value) => value.length === 16 && !isNaN(value),
};
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
      creditCard: "",
    },

    errName: "",
    errSurname: "",
    errPassword: "",
    errPostal: "",
    errCredit: "",
  };

  updateSingupField = (e) => {
    let addInfo = { ...this.state.addInfo };
    let currentId = e.currentTarget.id;

    addInfo[currentId] = e.currentTarget.value;

    this.setState({ addInfo });
  };

  checkIfValid = () => {
    let valid = true;
    for (let key in this.state.addInfo) {
      if (this.state.addInfo[key] === null || this.state.addInfo[key] === "") {
        valid = false;
      }
    }
    return valid;
  };

  submitInfo = (e) => {
    e.preventDefault();
    const values = Object.values(this.state.addInfo);
    console.log(values);
    const keys = Object.keys(this.state.addInfo);
    console.log(keys);

    let errName = "";
    let errSurname = "";
    let errPassword = "";
    let errPostal = "";
    let errCredit = "";

    let hasError = false;
    values.forEach((value, index) => {
      const keyOfCurrentValue = keys[index];
      console.log("keyOf: ", keyOfCurrentValue);

      if (keyOfCurrentValue === "name" && keyOfCurrentValue !== "error") {
        let rule = rules[keyOfCurrentValue];
        console.log("rule:", rule);

        if (!(rule && rule(value))) {
          errName = `Name needs to be more than 2 characters long`;
          hasError = true;
        }
      } else if (
        keyOfCurrentValue === "surname" &&
        keyOfCurrentValue !== "error"
      ) {
        let rule = rules[keyOfCurrentValue];
        console.log("rule:", rule);

        if (!(rule && rule(value))) {
          errSurname = `Surname needs to be more than 3 characters long`;
          hasError = true;
        }
      } else if (
        keyOfCurrentValue === "password" &&
        keyOfCurrentValue !== "error"
      ) {
        let rule = rules[keyOfCurrentValue];
        console.log("rule:", rule);

        if (!(rule && rule(value))) {
          errPassword = `Password must be at least 8 character long, at least one letter and one number `;
          hasError = true;
        }
      } else if (
        keyOfCurrentValue === "postalCode" &&
        keyOfCurrentValue !== "error"
      ) {
        let rule = rules[keyOfCurrentValue];
        console.log("rule:", rule);

        if (!(rule && rule(value))) {
          errPostal = `Postal code must be 5 digits long `;
          hasError = true;
        }
      } else if (
        keyOfCurrentValue === "creditCard" &&
        keyOfCurrentValue !== "error"
      ) {
        let rule = rules[keyOfCurrentValue];
        console.log("rule:", rule);

        if (!(rule && rule(value))) {
          errCredit = `Credit card must be 16 digits long`;
          hasError = true;
        }
      }
    });

    if (!hasError) {
      this.props.history.push("/sumbitedDetails");
      this.props.onClick(this.state.addInfo);
    } else {
      this.setState({
        errName,
        errSurname,
        errPassword,
        errPostal,
        errCredit,
      });
    }
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center mb-5">
          <img src={logo} alt="netflix" width="200" />
        </div>
        <div className="loginForm-bg pb-5">
          <div className="loginForm">
            <Container>
              <Row>
                <Col
                  className="my-5"
                  md={{ span: 8, offset: 2 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow:
                      "inset 7px 5px 8px #c7c5c5, inset -7px -5px 8px #c7c5c5",
                    zIndex: 999,
                  }}
                >
                  <h2 className="text-dark text-center mt-3">
                    Register on Striveflix
                  </h2>
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
                          />
                        </Form.Group>
                        {this.state.errName.length > 0 && (
                          <Alert variant="danger">{this.state.errName}</Alert>
                        )}
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
                          />
                        </Form.Group>
                        {this.state.errSurname.length > 0 && (
                          <Alert variant="danger">
                            {this.state.errSurname}
                          </Alert>
                        )}
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
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
                          />
                        </Form.Group>
                        {this.state.errPassword.length > 0 && (
                          <Alert variant="danger">
                            {this.state.errPassword}
                          </Alert>
                        )}
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
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
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
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
                          />
                        </Form.Group>
                        {this.state.errPostal.length > 0 && (
                          <Alert variant="danger">{this.state.errPostal}</Alert>
                        )}
                      </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label
                            htmlFor="creditCard"
                            className="text-dark"
                          >
                            Credit Card
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="creditCard"
                            id="creditCard"
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            value={this.state.addInfo.creditCard}
                            onChange={this.updateSingupField}
                          />
                        </Form.Group>
                        {this.state.errCredit.length > 0 && (
                          <Alert variant="danger">{this.state.errCredit}</Alert>
                        )}
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-around w-100 mt-5">
                      <Button
                        variant="danger"
                        type="submit"
                        disabled={!this.checkIfValid()}
                      >
                        Sign Up
                      </Button>
                      <Button
                        variant="info"
                        onClick={() => {
                          this.props.history.push("/home");
                        }}
                      >
                        Already have an account
                      </Button>
                    </div>
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
