import React from "react";
import { ListGroup, Badge, Button, Spinner } from "react-bootstrap";

class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    this.setState({ loading: true });
    this.props.clearEditCommentState();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookId,

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
          }),
        }
      );

      let comments = await response.json();
      console.log("comment array ", comments);
      setTimeout(() => {
        this.setState({ comments: comments, loading: false });
      }, 2000);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  deleteComment = async (commentID) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentID,
        {
          method: "DELETE",
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      if (response.ok) {
        // checking the ok property which stores the successful result of the operation
        alert("Comment deleted successfully");
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.bookId !== this.props.bookId) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
    if (previousProps.submitCounter !== this.props.submitCounter) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
    if (previousProps.deleteCounter !== this.props.deleteCounter) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
  };
  deleteComment = async (commentID) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentID,
        {
          method: "DELETE",
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
          }),
        }
      );

      if (response.ok) {
        alert("Comment deleted");
        this.props.onClick();
      } else alert("Something went wrong");
    } catch (e) {
      console.log("error: ", e);
    }
  };
  render() {
    return (
      <div className="mb-5">
        {this.state.loading ? (
          <Spinner animation="border" role="status" variant="danger" />
        ) : (
          <>
            {this.state.comments
              .filter((res) => res.elementId === this.props.bookId)
              .map((comment, index) => {
                let variant = "";

                switch (comment.rate) {
                  case 1:
                    variant = "danger";
                    break;
                  case 2:
                    variant = "warning";
                    break;
                  case 3:
                    variant = "secondary";
                    break;
                  default:
                    variant = "success";
                    break;
                }
                return (
                  <ListGroup key={index}>
                    <ListGroup.Item className="text-dark text-center d-flex justify-content-between">
                      Comment: {comment.comment}
                      <span className="mr-2">
                        Rate
                        <Badge pill variant={variant} className="ml-1">
                          {comment.rate}
                        </Badge>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span>
                        <Button
                          variant="danger"
                          onClick={() => {
                            this.deleteComment(comment._id);
                          }}
                          className="mr-2"
                        >
                          DELETE
                        </Button>
                        <Button
                          variant="info"
                          onClick={() => this.props.editCm(comment)}
                        >
                          EDIT
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
          </>
        )}
      </div>
    );
  }
}

export default CommentList;
