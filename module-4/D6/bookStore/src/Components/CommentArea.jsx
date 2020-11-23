import React from "react";
import { Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

class CommentArea extends React.Component {
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
          <CommentList bookId={this.props.myBook.asin} />
          <AddComment bookId={this.props.myBook.asin} />
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

export default CommentArea;
