import {REMOVE_TODO} from '../actions';

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
});
