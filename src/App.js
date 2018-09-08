import React, { Component } from 'react';
import Todos from './Todos'
import AddToDo from './AddToDo'

class App extends Component {
  state = {
    count: 0,
    todos:[]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo =>{
      return todo.id !== id
    } )
    this.setState({
      todos
    })
  }
  addTodo = (content) => {
    const newid = this.state.count + 1
    this.setState({
      count: newid,
      todos: [...this.state.todos,{id: newid, content: content}]
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo} />
        <AddToDo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
