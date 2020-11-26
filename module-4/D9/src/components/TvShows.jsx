import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import SerieList from "./SerieList";
import JumboCarousel from "./JumboCarousel";

class TvShows extends React.Component {
  state = {
    keyWord: "",
    isTyped: false,
  };

  HandleSearchQuery = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      this.setState({ keyWord: this.state.keyWord, isTyped: true });
    } else {
      this.setState({ keyWord: e.currentTarget.value });
    }
    if (this.state.keyWord === "") {
      this.setState({ isTyped: false });
    }
  };

  render() {
    return (
      <>
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
            placeholder="Search a serie"
            onKeyDown={this.HandleSearchQuery}
            onChange={this.HandleSearchQuery}
            value={this.state.keyWord}
          />
        </InputGroup>

        {this.state.isTyped ? (
          <SerieList query={this.state.keyWord} history={this.props.history} />
        ) : (
          <SerieList query="batman" history={this.props.history} />
        )}
      </>
    );
  }
}

export default TvShows;
