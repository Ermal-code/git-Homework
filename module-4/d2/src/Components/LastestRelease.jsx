import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import Fantasy from "../data/fantasy.json";
import Horror from "../data/horror.json";
import History from "../data/history.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";

class LatestRelease extends React.Component {
  state = {
    genre: Fantasy,
  };

  render() {
    console.log(Fantasy);

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() =>
                this.setState({ genre: (this.state.genre = Fantasy) })
              }
            >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() =>
                this.setState({ genre: (this.state.genre = History) })
              }
            >
              History
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() =>
                this.setState({ genre: (this.state.genre = Horror) })
              }
            >
              Horror
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() =>
                this.setState({ genre: (this.state.genre = Romance) })
              }
            >
              Romance
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() =>
                this.setState({ genre: (this.state.genre = Scifi) })
              }
            >
              SciFi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row className="mt-4">
          {this.state.genre.map((item) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={2}
                className="mb-3 position-relative"
                key={`item${item.asin}`}
              >
                <img
                  className="img-fluid"
                  src={item.img}
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default LatestRelease;
