import {connect} from 'react-redux';
import {addTodo} from '../action-creators/add-todo';
import {AddTodo} from '../components/add-todo';

const mapDispatchToProps = {
  addTodo
};

export const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodo);
