import React, { Component } from "react";
import "./ToDoList";
import ToDoList from "./ToDoList";

class App extends Component {
  state = {
    todo: [
      { id: 1, title: "Shopping", content: "buy some coffee" },
      { id: 2, title: "Sport", content: "buy tickets to gym" },
      { id: 3, title: "School", content: "buy lesson" },
      { id: 4, title: "TV", content: "buy new programs" }
    ]
  };
  render() {
    return (
      <div className="todoClassCss container">
      <h1 className="center  purple-text">To Do List</h1>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" />
            <label className="active" for="title">
              Title:
            </label>
          </div>
          <ToDoList todo={this.state.todo} />
        </div>
      </div>
    );
  }
}

export default App;
