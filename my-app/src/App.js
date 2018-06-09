import React, { Component } from 'react'
import logo from './nona_logo.svg'
import './App.css'

const ToDoItem = (props) => {
  return <div className = "ToDoItem" >
          <p> {props.todo.todo}</p>
      </div> 
}

const ToDoList = (props) => {
  return <div className = "Status-Container"><h1> {props.heading}</h1>
  {props.heading === 'To do' ? 
    <div> 
      <input ref={props.refx} placeholder="Type your to do here"/><button onClick={() => props.itemMethods.addItem()} className = "AddItem"> Add item </button> 
    </div>: ''
  }
  {props.todos.map((todo) => {
    return props.heading === todo.status ? <ToDoItem
    key = {todo.id}
    todo = {todo}  
    /> : ''
  })}</div>
}

class App extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef();
    this.state = {
      todos: [
        {id : this.generateUniqueId(), todo : 'Learn React', status: 'To do'},
        {id : this.generateUniqueId(), todo : 'Learn Redux', status: 'To do'},
        {id : this.generateUniqueId(), todo : 'Learn CSS Flex', status: 'To do'}
      ],
      inputValue: ''
    }
  }

  updateInputValue = (event) => {
    event.preventDefault()
    let text = event.target.value
    this.setState({inputValue: text})
  }
  
  generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9)
  }
  
  addItem = () => {
    let todos = [...this.state.todos, {
      id: this.generateUniqueId(),
      todo: this.inputRef.current.value,
      status: 'To do'
    }]
    this.setState({todos: todos})
  }

  itemMethods = {
    addItem: this.addItem
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nello (The Nona - Trello)</h1>
        </header>
        <div className = "Content">
          <ToDoList todos = {this.state.todos} heading = "To do" itemMethods = {this.itemMethods} refx = {this.inputRef}/>
          <ToDoList todos = {this.state.todos} heading = "In progress"  itemMethods = {this.itemMethods} refx = {this.inputRef}/>
          <ToDoList todos = {this.state.todos} heading = "Done" itemMethods = {this.itemMethods} refx = {this.inputRef}/>
        </div>
      </div>
    )
  }
}

export default App



