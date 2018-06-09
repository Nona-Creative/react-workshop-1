import React, { Component } from 'react';
import logo from './nona_logo.svg';
import './App.css';

const ToDoItem = (props) => {
  return <div className = "ToDoItem" >
          <p> {props.todo}</p>
        </div> 
}

const ToDoList = (props) => {
  return <div className = "Status-Container">{
    props.todos.map((todo) => { // Map through the todos array from the state
      console.log(todo)
      return<ToDoItem
        key = {todo.id}  // A unique key is required so that react knows how to target specific views that have changed in the event of rerender
        todo = {todo.todo}  
        /> 
      })}
    </div>
}
    
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id : '1', todo : 'Learn React'},
        {id : '2', todo : 'Learn Redux'},
        {id : '3', todo : 'Learn CSS Flex'}
     
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
          <ToDoList todos = {this.state.todos} /> 
          {/* Take a moment... to appreciate how deeply pleasing this is compared the hard 
          coded grossness we previously had */}
        </div>
      </div>
    );
  }
}

export default App;