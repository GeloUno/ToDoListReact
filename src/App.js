import React, { Component } from "react";
import "./ToDoList";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import style from './App.css'

class App extends Component {
  state = {
    todo: [
      { id: 1, title: "Shopping", content: "buy some coffee" },
      { id: 2, title: "Sport", content: "buy tickets to gym" },
      { id: 3, title: "School", content: "buy lesson" },
      { id: 4, title: "TV", content: "buy new programs" }
    ]
  };
  deleteToDo = (id)=>{
    const todo1 = this.state.todo.filter((todo)=>{
      return todo.id !== id; 
      // if todoid === id; will return one true and other is false; and will leave only true object list, one object list
      // if todoid!== id will return true for other oject list not equal id sended, so will removed object list witch sended id, and other will stay 
    });
    this.setState({todo:todo1})
    }

  addToDoState = (to_do)=>{
    to_do.id = Math.floor(Math.random()*1000);
    let to_do_1 = [...this.state.todo, to_do];
    this.setState({
      todo:to_do_1      
    })

  }
  render() {
    return (
      <div className="todoClassCss container">
      <h1 className="center  purple-text">To Do List</h1>
        <div className="row"> 
        <AddToDo addToDoState={this.addToDoState} />         
          <ToDoList todo={this.state.todo} deleteToDo={this.deleteToDo} />
        </div>
      </div>
    );
  }
}

export default App;
