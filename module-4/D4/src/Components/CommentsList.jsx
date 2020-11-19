import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

class CommentList extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
          }),
        }
      );
      let comments = await response.json();

      this.setState({ comments });
    } catch (e) {
      console.log("error: ", e);
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
      } else alert("Something went wrong");
    } catch (e) {
      console.log("error: ", e);
    }
  };
  render() {
    return (
      <div className="mb-5">
        {this.state.comments.map((comment, index) => {
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
              <ListGroup.Item>Comment: {comment.comment}</ListGroup.Item>
              <ListGroup.Item>
                <span>Rate </span>
                <Badge pill variant={variant}>
                  {comment.rate}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="danger"
                  onClick={() => this.deleteComment(comment._id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
        ;
      </div>
    );
  }
}

export default CommentList;
