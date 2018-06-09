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
// State is initialised once in the constructor using this.state = {...}. If state is changed later setState must be used
// We set state to an array of todo elements
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id : '1', todo : 'Learn React'},
        {id : '2', todo : 'Learn Redux'},
        {id : '3', todo : 'Learn CSS Flex'}
        // id isn't used in the step but fear not it will be in the next one #HakunaMatata
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nello (The Nona - Trello)</h1>
        </header>
        <div className = "Content">
        {/* select element i from the state array */}
        {/* This may seem verbose... because it is... 
            we need some sort of loop...
            but which one? The plot thickens (although the code should become thinner) */}
          <ToDoItem todo = {this.state.todos[0].todo}/>
          <ToDoItem todo = {this.state.todos[1].todo}/>
          <ToDoItem todo = {this.state.todos[2].todo}/>
        </div>
      </div>
    );
  }
}

export default App;
