import t from 'tcomb';
import {Todos} from '../components/todos';

export const State = t.struct({
  todos: Todos
});
