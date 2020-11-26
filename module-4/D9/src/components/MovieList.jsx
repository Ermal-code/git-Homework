import React from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import ShowDetail from "./ShowDetail";

class MovieList extends React.Component {
  state = {
    Movies: [],
    selectedMovie: null,

    loading: true,
    Error: false,
  };

  sortAsc = (array) => {
    array.sort(function (a, b) {
      var movieA = a.Year; // ignore upper and lowercase
      var movieB = b.Year; // ignore upper and lowercase
      if (movieA > movieB) {
        return -1;
      }
      if (movieA < movieB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };

  getMovies = async () => {
    this.setState({ loading: true, Error: false });
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=314c2e4c&s=" + this.props.query
      );
      let movies = await response.json();

      // let newMovies = { ...this.state.Movies };
      // newMovies[query] = movies.Search;
      let newMovies = movies.Search;
      if (!newMovies) {
        console.log("an error occurred");
        setTimeout(() => {
          this.setState({
            loading: false,
            Error: true,
          });
        }, 2000);
      } else {
        this.sortAsc(newMovies);

        setTimeout(() => {
          this.setState({ Movies: newMovies, loading: false, Error: false });
        }, 2000);
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount = () => {
    this.getMovies();
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.query !== this.props.query) {
      this.getMovies();
    }
  };

  render() {
    return (
      <>
        {!this.state.Error ? (
          <div className="myContainer">
            {this.state.loading ? (
              <Spinner
                animation="grow"
                variant="danger"
                style={{ marginLeft: "45%" }}
              />
            ) : (
              <>
                {this.state.selectedMovie && <ShowDetail />}

                <h1 className="mt-4 mb-3">{this.props.query.toUpperCase()}</h1>
                <Row>
                  {this.state.Movies.map((movie) => (
                    <Col
                      xs={6}
                      md={3}
                      lg={2}
                      key={`MovieID${movie.imdbID}`}
                      className="mb-3 px-0 position-relative"
                    >
                      <SingleMovie history={this.props.history} Movie={movie} />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </div>
        ) : (
          <Alert
            variant="danger"
            className="text-center w-50"
            style={{ marginLeft: "25%" }}
          >
            There is no such thing on our data base
          </Alert>
        )}
      </>
    );
  }
}

export default MovieList;
