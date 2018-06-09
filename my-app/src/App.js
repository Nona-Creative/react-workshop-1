import React, { Component } from 'react'
import logo from './nona_logo.svg'
import './App.css'

const ToDoItem = (props) => {
  return <div className = "ToDoItem" >
          <p> {props.todo.todo}</p>
          <div className = "Buttons">
            <button onClick={(event) => this.deleteItem(props.todo.id)} className = "Delete"> Delete </button>
            {props.todo.status === 'Done' ? '' : <button onClick={(event)=>this.moveItem(props.todo.id, props.todo.status)} className = "Next"> Next </button>}
          </div>
      </div> 
}

const ToDoList = (props) => {
  return <div className = "Status-Container"><h1> {props.heading}</h1>
  {props.heading === 'To do' ? 
    <div> 
      <input ref={props.refx} placeholder="Type your to do here"/><button onClick={() => props.addItem()} className = "AddItem"> Add item </button> 
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

  deleteItem = (id) => {
    let todos = [...this.state.todos]
    todos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: todos})
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

  moveItem = (id, status) => {
    let todos = [...this.state.todos]
    let desiredIndex = todos.findIndex(todo => todo.id === id)
    switch (status) {
      case 'To do':
        todos[desiredIndex].status = 'In progress'
      break
      case 'In progress':
        todos[desiredIndex].status = 'Done'
      break
    }
    this.setState({todos: todos})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nello (The Nona - Trello)</h1>
        </header>
        <div className = "Content">
          <ToDoList todos = {this.state.todos} heading = "To do" refx = {this.inputRef} addItem={this.addItem}/>
          <ToDoList todos = {this.state.todos} heading = "In progress" refx = {this.inputRef} addItem={this.addItem} />
          <ToDoList todos = {this.state.todos} heading = "Done" refx = {this.inputRef} addItem={this.addItem}  />
        </div>
      </div>
    )
  }
}

export default App



