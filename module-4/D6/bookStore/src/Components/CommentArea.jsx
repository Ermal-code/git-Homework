import React from "react";
import { Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

class CommentArea extends React.Component {
  state = {
    submitCounter: 0,
    deleteCounter: 0,
    editComment: { comment: {}, editCounter: 0 },
  };

  render() {
    return (
      <Modal.Dialog className="mt-0">
        <Modal.Header className="flex justify-content-center">
          <img
            src={this.props.myBook.img}
            className="img-fluid rounded"
            alt="book"
          />
        </Modal.Header>

        <Modal.Body>
          <CommentList
            bookId={this.props.myBook.asin}
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
            clearEditCommentState={() =>
              this.setState({
                editComment: {
                  comment: {},
                  editCounter: 0,
                },
              })
            }
          />
          <AddComment
            bookId={this.props.myBook.asin}
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
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

export default CommentArea;
