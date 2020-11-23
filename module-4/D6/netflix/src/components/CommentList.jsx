import React from "react";
import { ListGroup, Badge, Spinner } from "react-bootstrap";
class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      let comments = await response.json();
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

  componentDidUpdate = (previousState) => {
    if (previousState !== this.state.comments) {
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
            {this.state.comments
              .filter((res) => res.elementId === this.props.movieId)
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
                    <ListGroup.Item className="text-dark">
                      Comment: {comment.comment}
                    </ListGroup.Item>
                    <ListGroup.Item className="text-dark">
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
      </div>
    );
  }
}

export default CommentList;
