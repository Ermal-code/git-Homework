import React from "react";
import { Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

class CommentArea extends React.Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <img src={this.props.bookImg} className="img-fluid" alt="book" />
        </Modal.Header>

        <Modal.Body>
          <CommentList />
          <AddComment bookId={this.props.bookId} />
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

export default CommentArea;
