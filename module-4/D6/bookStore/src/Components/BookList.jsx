import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    books: this.props.objArr,
    selectedBook: null,
  };

  HandleSearchQuery = (query) => {
    let books = this.state.books;

    if (query) {
      let filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ books: filteredBooks });
    } else {
      this.setState({ books: this.props.objArr });
    }
  };
  render() {
    return (
      <Container className="mt-5">
        <InputGroup size="sm" className="mb-3 ">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              this.HandleSearchQuery(e.target.value);
            }}
          />
        </InputGroup>

        <Row>
          <Col xs={6} md={8}>
            <Row>
              {this.state.books.map((book) => (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={`bookID${book.asin}`}
                  className="mb-3"
                >
                  <SingleBook
                    obj={book}
                    onClick={() => this.setState({ selectedBook: book })}
                  ></SingleBook>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={6} md={4}>
            {this.state.selectedBook ? (
              <CommentArea myBook={this.state.selectedBook} />
            ) : (
              <div>
                <h1>Comment Area</h1>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
