import t from 'tcomb';

export const Todo = t.struct({
  text: t.String,
  done: t.Boolean
}, 'Todo');
