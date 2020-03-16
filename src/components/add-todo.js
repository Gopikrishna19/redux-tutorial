import React, {Component} from 'react';

export class AddTodo extends Component {
  state = {
    todoText: ''
  };

  setTodoText = (event) => {
    this.setState({
      todoText: event.target.value
    });
  };

  addTodo = () => {
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: ''
    });
  };

  render() {
    return (
      <>
        <input value={this.state.todoText} type='text' onChange={this.setTodoText}/>
        <input value='Add' type='button' onClick={this.addTodo}/>
      </>
    );
  }
}
