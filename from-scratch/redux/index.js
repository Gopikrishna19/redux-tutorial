const defaultMiddleware = () => (next) => (action) => next(action);

const createStore = (reducer, middleware = defaultMiddleware) => {
  let state = {};
  let subscribers = [];

  const next = (action) => {
    if(typeof action !== 'object') {
      throw 'action is not an object';
    }

    if(!action.type) {
      throw 'action type is required';
    }

    state = reducer(state, action);
    subscribers.forEach(callback => callback(store));
  };

  const store = {
    dispatch(action) {
      middleware(store)(next)(action);
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    }
  };

  return store;
};

const combineReducers = (object) =>
  (state, action) =>
    Object.entries(object)
      .reduce((nextState, [key, value]) => Object.assign(nextState, {
        [key]: value(state[key], action)
      }), {});

module.exports = {
  applyMiddleware: (middleware) => middleware,
  combineReducers,
  createStore
};
