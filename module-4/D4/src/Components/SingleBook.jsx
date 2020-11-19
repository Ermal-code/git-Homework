import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
    color: "white",
  };

  handleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true, color: "#5B96A5" });
    } else {
      this.setState({ selected: false, color: "white" });
    }
  };

  render() {
    return (
      <>
        {this.state.selected && (
          <CommentArea
            bookId={this.props.obj.asin}
            bookImg={this.props.obj.img}
          />
        )}
        <Card onClick={() => this.handleSelected()}>
          <Card.Img
            variant="top"
            src={this.props.obj.img}
            className="img-fluid"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body style={{ backgroundColor: this.state.color }}>
            <Card.Title className="text-truncate">
              {this.props.obj.title}
            </Card.Title>
            <Card.Text>
              <strong className="text-danger">Category: </strong>
              {this.props.obj.category}
            </Card.Text>
            <br />
            <Card.Text className="text-warning">
              ${this.props.obj.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
