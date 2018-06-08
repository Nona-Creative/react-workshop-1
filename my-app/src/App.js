import React, { Component } from 'react';
import logo from './nona_logo.svg';
import './App.css';

// Defining a react component that takes props (properties) as a parameter
// Components should be declared above the class instead on in the render method
// to give them file-scope. If left in the render method the component will be 
// recreated everytime the render method is called which is inefficient.
const ToDoItem = (props) => {
  return <div className = "ToDoItem" >
          <p> {props.todo}</p>
        </div> 
}

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nello (The Nona - Trello)</h1>
        </header>
        <div className = "Content">
        {/* Calling the react component to replicate itself 3 times */}
        {/* The props.todo in each instance of the component is sent to the given string */}
          <ToDoItem todo = 'Learn React'/>
          <ToDoItem todo = 'Learn CSS Flex'/>
          <ToDoItem todo = 'Learn Redux'/>
        </div>
      </div>
    );
  }
}

export default App;
