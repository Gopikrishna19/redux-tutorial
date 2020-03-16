import {connect} from 'react-redux';
import {removeTodo} from '../action-creators/remove-todo';
import {updateTodo} from '../action-creators/update-todo';
import {Todos} from '../components/todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  onChange: updateTodo,
  onRemove: removeTodo
};

export const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);
