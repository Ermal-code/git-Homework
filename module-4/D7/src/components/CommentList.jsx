import React from "react";
import { ListGroup, Badge, Spinner, Alert } from "react-bootstrap";
class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.movieId,

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      let comments = await response.json();
      comments = comments.reverse();
      console.log(comments);
      setTimeout(() => {
        this.setState({ comments: comments, loading: false });
      }, 2000);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.submitCounter !== this.props.submitCounter) {
      console.log("ComponentDidUpdate is working...");
      this.fetchComments();
    }
  };

  render() {
    return (
      <div className="mb-5">
        {this.state.loading ? (
          <Spinner
            animation="grow"
            variant="danger"
            style={{ marginLeft: "45%" }}
          />
        ) : (
          <>
            {this.state.comments.length === 0 ? (
              <Alert variant="danger">No comments to show</Alert>
            ) : (
              <>
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
                      <ListGroup.Item className="text-dark text-center">
                        Comment: {comment.comment}
                      </ListGroup.Item>
                      <ListGroup.Item className="text-dark text-center">
                        <span>Rate </span>
                        <Badge pill variant={variant}>
                          {comment.rate}
                        </Badge>
                      </ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default CommentList;
