import React, { Component } from 'react';
import './App.css';
import CarShowsData from './containers/CarShowsData'

class App extends Component {
  render() {
    return (
      <div className="App">
      <CarShowsData />
      </div>
    );
  }
}

export default App;
