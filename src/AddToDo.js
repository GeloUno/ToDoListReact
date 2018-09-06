import React, { Component } from "react";
import App from "./App";

class AddToDo extends Component {
  disabled = true;
  state = {
    title: "",
    content: ""
  };

 
  handleChange = e => {
    //  console.log(e.target.id);
    e.target.id === "title"
      ? this.setState({
          title: e.target.value
        })
      : // console.log('TITLE')
        //   console.log('Content')
        this.setState({
          content: e.target.value
        });   
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDoState(this.state);
    console.log(this.state);
    console.log(e.target);
    e.target.value = "";
    this.setState({
      title: "",
      content: ""
    });    
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              className="validate"
            />
            <label className="active" htmlFor="title">
              Title:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="content"
              type="text"
              onChange={this.handleChange}
              value={this.state.content}
              className="validate"
            />
            <label className="active" htmlFor="content">
              Content:
            </label>
          </div>
          <button
            disabled={!(this.state.content && this.state.title)}
            className="waves-effect purple waves-teal btn"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default AddToDo;
