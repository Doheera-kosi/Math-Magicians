import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
