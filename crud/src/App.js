import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Match } from 'react-router'
import GamesPage from './GamesPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="games">games</Link>
        </p>

        <Match pattern="/games" Component={GamesPage} />

      </div>
    );
  }
}

export default App;
