import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyBadge from "./Components/MyBadge";
import WarningSign from "./Components/WarningSign";
import fantasy from "./data/fantasy.json";
import BookList from "./Components/BookList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WarningSign text="Exercise one " />
        <MyBadge text="Exercise two" color="primary" />
        <BookList objArr={fantasy} />
      </div>
    );
  }
}

export default App;
