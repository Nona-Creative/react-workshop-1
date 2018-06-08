import React, { Component } from 'react';
import logo from './nona_logo.svg';
import './App.css';

class App extends Component {
  render() {
    // Defining a react component that takes no parameters 
    // Arrow Functions must always have a defined return
    const ToDoItem = () => {
      return <div className = "ToDoItem" >
              <p> Learn React</p>
          </div> 
    }

    return (
      // Note that JSX looks similar to HTML but it isn't exactly the same. Html -> class="foo" JSX className="bar"
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nello (The Nona - Trello)</h1>
        </header>
        {/* <div> added for styling purpose - otherwise the components will display under the header which is -> position: fixed; */}
        <div className = "Content">
        {/* Calling the react component to replicate itself 3 times */}
          <ToDoItem/>
          <ToDoItem/>
          <ToDoItem/>
        </div>
      </div>
    );
  }
}

export default App;
