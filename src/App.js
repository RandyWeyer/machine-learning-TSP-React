import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Canvas></Canvas>

      </div>
    );
  }
}

export default App;
