import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import ShowDetail from "./ShowDetail";

class SerieList extends React.Component {
  state = {
    Movies: [],
    selectedMovie: null,
    displayModal: false,
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
    this.setState({ loading: true });

    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=314c2e4c&s=" +
          this.props.query +
          "&type=series"
      );
      let movies = await response.json();

      // let newMovies = { ...this.state.Movies };
      // newMovies[query] = movies.Search;
      let newMovies = movies.Search;
      console.log(newMovies);

      if (newMovies === undefined) {
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
        {this.state.Error ? (
          <Alert variant="danger">
            There is no such thing on our data base
          </Alert>
        ) : (
          <>
            <Container>
              {this.state.loading ? (
                <Spinner
                  animation="grow"
                  variant="danger"
                  style={{ marginLeft: "45%" }}
                />
              ) : (
                <>
                  {this.state.selectedMovie && (
                    <ShowDetail
                      show={this.state.displayModal}
                      movie={this.state.selectedMovie}
                      onHide={() => this.setState({ displayModal: false })}
                    />
                  )}

                  <h1 className="mt-4 mb-3">
                    {this.props.query.toUpperCase()}
                  </h1>
                  <Row>
                    {this.state.Movies.map((movie) => (
                      <Col
                        xs={6}
                        md={3}
                        lg={2}
                        key={`MovieID${movie.imdbID}`}
                        className="mb-3"
                      >
                        <SingleMovie
                          history={this.props.history}
                          Movie={movie}
                          onClicked={() =>
                            this.setState({
                              displayModal: true,
                              selectedMovie: movie,
                            })
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </>
              )}
            </Container>
          </>
        )}
      </>
    );
  }
}

export default SerieList;
