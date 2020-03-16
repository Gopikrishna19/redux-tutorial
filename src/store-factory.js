import reducers from './reducers';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(reducers, (__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(thunk)));
  }

  return store;
};
