import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class ShowDeatil extends React.Component {
  state = {
    movie: null,
    submitCounter: 0,
    deleteCounter: 0,
    // credentials: this.props.data ? this.props.data : {},
    editComment: { comment: {}, editCounter: 0 },
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=314c2e4c&i=" +
          this.props.match.params.id
      );
      let movie = await response.json();

      this.setState({ movie: movie });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container>
        {this.state.movie && (
          <>
            <Row>
              <Col
                className="px-0 pb-0 rounded"
                md={8}
                style={{
                  backgroundImage: `url(${this.state.movie.Poster})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  style={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <div>
                    <span className=" d-flex justify-content-center">
                      <h4 className="mt-3">
                        {this.state.movie.Title} : {this.state.movie.Rated}
                      </h4>
                    </span>
                  </div>
                  <div className="movieDisplay mt-4 px-2">
                    <h5>Year: {this.state.movie.Year}</h5>
                    <h5>Duration: {this.state.movie.Runtime}</h5>
                    <h5>Director: {this.state.movie.Director}</h5>
                    <h5>Genre: {this.state.movie.Genre}</h5>
                    <h5>Actors: {this.state.movie.Actors}</h5>
                    <h5>Production: {this.state.movie.Production}</h5>
                    <h5 className="mt-4 mb-0">Plot </h5>
                    <div className="mx-4 ">
                      <p>{this.state.movie.Plot}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                md={3}
                className="bg-light ml-2 rounded d-flex justify-content-center align-content-center"
              >
                <AddComment
                  movieId={this.props.match.params.id}
                  onClick={() =>
                    this.setState({
                      submitCounter: this.state.submitCounter + 1,
                    })
                  }
                  editedCm={this.state.editComment}
                  clearEditCommentState={() =>
                    this.setState({
                      editComment: {
                        comment: {},
                        editCounter: 0,
                      },
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={{ span: 8, offset: 2 }}>
                <CommentList
                  movieId={this.props.match.params.id}
                  submitCounter={this.state.submitCounter}
                  onClick={() =>
                    this.setState({
                      deleteCounter: this.state.deleteCounter + 1,
                    })
                  }
                  deleteCounter={this.state.deleteCounter}
                  editCm={(comment) =>
                    this.setState({
                      editComment: {
                        comment: comment,
                        editCounter: this.state.editComment.editCounter + 1,
                      },
                    })
                  }
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    );
  }
}

export default ShowDeatil;
