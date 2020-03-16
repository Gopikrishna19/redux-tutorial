import * as actions from '../actions';
import {getDefaultState, Todos} from '../state/todos';

const addTodo = (state, action) => Todos.update(state, {
  $push: [
    {
      done: false,
      text: action.text
    }
  ]
});

const updateTodo = (state, action) =>
  Todos.update(state, {
    [action.index]: {
      done: {
        $set: action.done
      }
    }
  });

const removeTodo = (state, action) =>
  Todos.update(state, {
    $splice: [[action.index, 1]]
  });

const actionHandlers = {
  [actions.ADD_TODO]: addTodo,
  [actions.REMOVE_TODO]: removeTodo,
  [actions.UPDATE_TODO]: updateTodo
};

export default (state = getDefaultState(), action) => {
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
};
