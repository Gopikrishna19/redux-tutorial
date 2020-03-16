import {UPDATE_TODO} from '../actions';

export const updateTodo = (index, done) => ({
  type: UPDATE_TODO,
  index,
  done
});
