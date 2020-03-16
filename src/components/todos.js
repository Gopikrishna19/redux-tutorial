import PropTypes from 'prop-types';
import React from 'react';

export const Todos = props =>
  <div>
    {
      props.todos.map((todo, index) =>
        <label
          key={index}
          style={{
            display: 'block'
          }}
        >
          <input
            type='checkbox'
            value={todo.done}
            onChange={() => props.onChange(index, !todo.done)}
          />
          <span>{todo.text}</span>
          <input type='button' value='Remove' onClick={() => props.onRemove(index)}/>
        </label>
      )
    }
  </div>;

Todos.displayName = 'Todos';
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
