import React, { Component } from 'react';
import steem from 'steem';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    const query = {
      limit: 10,
    };

    steem.api.getDiscussionsByTrending(query, function(err, result) {
      console.log(err, result);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
