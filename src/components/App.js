import React from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { Todo } from "./Todo";
const App = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

export default App;
