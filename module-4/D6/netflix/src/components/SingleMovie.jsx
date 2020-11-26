import React from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <span className="overlay-icons">
        <img
          src={this.props.Movie.Poster}
          className="img-fluid thumbnails w-100"
        />
        <h4 className="text-light movieCard" style={{ display: "none" }}>
          {this.props.Movie.Title}
        </h4>

        <Button
          variant="danger"
          style={{ display: "none" }}
          onClick={this.props.onClicked}
        >
          View Details
        </Button>
      </span>
    );
  }
}

export default SingleMovie;
