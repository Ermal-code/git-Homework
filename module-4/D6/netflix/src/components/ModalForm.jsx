import React from "react";
import { Modal, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class ModalForm extends React.Component {
  state = {
    submitCounter: 0,
    deleteCounter: 0,
    editComment: { comment: {}, editCounter: 0 },
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
            <CommentList
              movieId={this.props.movie.imdbID}
              submitCounter={this.state.submitCounter}
              onClick={() =>
                this.setState({
                  deleteCounter: this.state.deleteCounter + 1,
                })
              }
              deleteCounter={this.state.deleteCounter}
              editCm={(comment) =>
                this.setState({
                  editComment: {
                    comment: comment,
                    editCounter: this.state.editComment.editCounter + 1,
                  },
                })
              }
            />
            <Row className="flex justify-content-center">
              <AddComment
                movieId={this.props.movie.imdbID}
                onClick={() =>
                  this.setState({ submitCounter: this.state.submitCounter + 1 })
                }
                editedCm={this.state.editComment}
                clearEditCommentState={() =>
                  this.setState({
                    editComment: {
                      comment: {},
                      editCounter: 0,
                    },
                  })
                }
              />
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
