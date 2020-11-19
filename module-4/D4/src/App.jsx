import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import fantasy from "./data/fantasy.json";
import BookList from "./Components/BookList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BookList objArr={fantasy} />
      </div>
    );
  }
}

export default App;
