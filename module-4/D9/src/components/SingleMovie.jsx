import React from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends React.Component {
  render() {
    return (
      <div className="overlay-icons">
        <img
          src={this.props.Movie.Poster}
          className="img-fluid thumbnails w-100"
          alt="movie"
        />
        <h4 className="text-light movieCard" style={{ display: "none" }}>
          {this.props.Movie.Title}
        </h4>

        <Button
          variant="danger"
          style={{ display: "none" }}
          onClick={() =>
            this.props.history.push("/details/" + this.props.Movie.imdbID)
          }
        >
          View Details
        </Button>
      </div>
    );
  }
}

export default SingleMovie;
