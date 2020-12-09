import React from "react";
import { Button, Form } from "react-bootstrap";

class AddStudent extends React.Component {
  state = {
    student: {
      Name: "",
      Surname: "",
      Email: "",
      DateOfBirth: "",
    },
  };

  updateStudentFields = (e) => {
    let student = { ...this.state.student };
    let currentID = e.currentTarget.id;

    student[currentID] = e.currentTarget.value;
    this.setState({ student });
  };

  componentDidUpdate = (previousProps) => {
    if (
      previousProps.studentObj.editCounter !==
        this.props.studentObj.editCounter &&
      this.props.studentObj.editCounter > 0
    ) {
      this.setState({
        student: {
          Name: this.props.studentObj.studentobject.Name,
          Surname: this.props.studentObj.studentobject.Surname,
          Email: this.props.studentObj.studentobject.Email,
          DateOfBirth: this.props.studentObj.studentobject.DateOfBirth,
        },
      });
    }
  };

  submitStudent = async (e) => {
    e.preventDefault();
    let url = `http://localhost:3002/students`;
    try {
      let response;
      if (!this.props.studentObj.studentobject.ID) {
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(this.state.student),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });
      } else {
        response = await fetch(
          url + "/" + this.props.studentObj.studentobject.ID,
          {
            method: "PUT",
            body: JSON.stringify(this.state.student),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          }
        );
      }

      if (response.ok) {
        alert(
          `Student ${
            this.props.studentObj.studentobject.ID === undefined
              ? "Added"
              : "Edited"
          }`
        );
        this.props.clearStudentObj();
        this.setState({
          student: {
            Name: "",
            Surname: "",
            Email: "",
            DateOfBirth: "",
          },
        });
        this.props.submitCounter();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitStudent}>
          <Form.Group>
            <Form.Label htmlFor="Name">Name</Form.Label>
            <Form.Control
              id="Name"
              name="Name"
              type="text"
              required
              value={this.state.student.Name}
              onChange={this.updateStudentFields}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="Surname">Surname</Form.Label>
            <Form.Control
              id="Surname"
              name="Surname"
              type="text"
              required
              value={this.state.student.Surname}
              onChange={this.updateStudentFields}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="Email">Email</Form.Label>
            <Form.Control
              id="Email"
              name="Email"
              type="email"
              required
              value={this.state.student.Email}
              onChange={this.updateStudentFields}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="DateOfBirth">Date of Birth</Form.Label>
            <Form.Control
              id="DateOfBirth"
              name="DateOfBirth"
              type="text"
              required
              value={this.state.student.DateOfBirth}
              onChange={this.updateStudentFields}
            />
          </Form.Group>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="outline-light" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

export default AddStudent;
