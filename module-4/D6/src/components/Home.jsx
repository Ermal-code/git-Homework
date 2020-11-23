import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import MovieList from "./MovieList";

class Home extends React.Component {
  state = {
    keyWord: "",
    isTyped: false,
  };

  HandleSearchQuery = (query) => {
    if (query.length >= 3) {
      this.setState({ keyWord: query, isTyped: true });
    } else {
      this.setState({ keyWord: "", isTyped: false });
    }
  };

  render() {
    return (
      <>
        <InputGroup
          size="sm"
          className="my-5 w-50"
          style={{ marginLeft: "25%" }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search a movie"
            onChange={(e) => {
              this.HandleSearchQuery(e.target.value);
            }}
          />
        </InputGroup>

        {this.state.isTyped ? (
          <MovieList query={this.state.keyWord} />
        ) : (
          <>
            <MovieList query="batman" />
            <MovieList query="superman" />
            <MovieList query="hulk" />
          </>
        )}
      </>
    );
  }
}

export default Home;
