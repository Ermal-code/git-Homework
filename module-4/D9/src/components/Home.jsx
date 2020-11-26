import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import MovieList from "./MovieList";
import JumboCarousel from "./JumboCarousel";
import NavBar from "./NavBar";

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
        <NavBar />
        <JumboCarousel />
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
          <MovieList query={this.state.keyWord} history={this.props.history} />
        ) : (
          <>
            <MovieList query="batman" history={this.props.history} />
            <MovieList query="superman" history={this.props.history} />
            <MovieList query="hulk" history={this.props.history} />
          </>
        )}
      </>
    );
  }
}

export default Home;
