import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I'm a React App! </h1>
        <Person name="Bobert" age="1" />
        <Person name="Aaron" age="2"> My hobbies: Racing </Person>
        <Person name="Stephen" age="3" />
      </div>
    );
  }
}

export default App;