import React from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import AddStudent from "./AddStudent";

class Home extends React.Component {
  state = {
    students: [],
    submitCounter: 0,
    editStudent: { studentobject: {}, editCounter: 0 },
  };

  fetchStudents = async () => {
    let url = `http://localhost:3002/students`;
    try {
      let response = await fetch(url, {
        method: "GET",
      });

      let students = await response.json();

      console.log(students);
      if (response.ok) {
        this.setState({ students });
      } else {
        alert("Something is wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteStudent = async (id) => {
    try {
      let response = await fetch("http://localhost:3002/students/" + id, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Student deleted");
        this.setState({ submitCounter: this.state.submitCounter + 1 });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchStudents();
  };
  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.submitCounter !== this.state.submitCounter) {
      this.fetchStudents();
    }
  };

  render() {
    return (
      <>
        <Container>
          <h1 className="text-center mt-5">Students App</h1>
          <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Date of birth</th>
                <th>Delete/Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{student.Name}</td>
                  <td>{student.Surname}</td>
                  <td>{student.Email}</td>
                  <td>{student.DateOfBirth}</td>
                  <td>
                    <span>
                      <Button
                        variant="outline-danger"
                        className="mr-4"
                        onClick={() => this.deleteStudent(student.ID)}
                      >
                        X
                      </Button>
                      <Button
                        variant="outline-light"
                        onClick={() =>
                          this.setState({
                            editStudent: {
                              studentobject: student,
                              editCounter:
                                this.state.editStudent.editCounter + 1,
                            },
                          })
                        }
                      >
                        E
                      </Button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="my-5">
            <Col
              xs={{ span: 6, offset: 3 }}
              className="bg-dark rounded text-light"
            >
              <h4 className="my-3 text-center">Add student</h4>
              <AddStudent
                submitCounter={() =>
                  this.setState({ submitCounter: this.state.submitCounter + 1 })
                }
                studentObj={this.state.editStudent}
                clearStudentObj={() =>
                  this.setState({
                    editStudent: { studentObj: {}, editCounter: 0 },
                  })
                }
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
