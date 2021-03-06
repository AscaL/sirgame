import React, { Component } from 'react';

import SirGameContainer from './containers/SirGameContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SirGame!</h2>
        </div>
        <SirGameContainer />
      </div>
    );
  }
}

export default App;
