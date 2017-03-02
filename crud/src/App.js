import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import GamesPage from './GamesPage'
import GameForm from './GameForm'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          {/*<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <Link to="games">games</Link>
          </p>*/}


          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/games/new">Add New Game</Link>

        </div>
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GameForm} />
      </div>
    );
  }
}

export default App;
