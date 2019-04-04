import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import http from "./serve"
class App extends Component {
  async getlist() {
    const res = await http.post("classroom/getTextLink", {
      type: "1",
      GAMEID: "38",
      unionId: "84d2d5cb35264e35a17239a69f2e3f46",
      timestamp: new Date().getTime(),
      ciphertext_key: "30c3f43220a9501aa7b4e338a7771432",
    })
    console.log(res);
  }
  componentDidMount(){
    this.getlist()
    console.log(http);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
