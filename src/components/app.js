import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedAddTodo} from '../connectors/add-todo';
import {ConnectedTodos} from '../connectors/todos';
import {getStore} from '../store-factory';

export const App = () => (
  <Provider store={getStore()}>
    <ConnectedAddTodo/>
    <ConnectedTodos/>
  </Provider>
);

