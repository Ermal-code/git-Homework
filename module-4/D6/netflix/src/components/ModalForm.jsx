import React from "react";
import { Modal, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class ModalForm extends React.Component {
  state = {
    products: [],
    show: false,
    // credentials: this.props.data ? this.props.data : {},
  };

  // onChangeHandler = (e) => {
  //   this.setState({
  //     credentials: {
  //       ...this.state.credentials,
  //       [e.target.id]: e.target.value,
  //     },
  //   });
  // };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton className="flex justify-content-center">
            <Modal.Title className="text-dark">
              {this.props.movie.Title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="flex justify-content-center">
              <img
                src={this.props.movie.Poster}
                alt="movie"
                style={{
                  objectFit: "cover",
                  height: "200px",
                  marginBottom: "10px",
                }}
              />
            </Row>
            <CommentList movieId={this.props.movie.imdbID} />
            <Row className="flex justify-content-center">
              <AddComment movieId={this.props.movie.imdbID} />
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
