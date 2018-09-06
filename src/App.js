import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // $(document).ready(function() {
    //   M.updateTextFields();
    // });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="row">
    <div className="input-field col s6">
      <input  id="first_name2" type="text" className="validate"></input>
      <label className="active" for="first_name2">First Name</label>
    </div>
  </div>
        
      </div>
    );
  }
}

export default App;
