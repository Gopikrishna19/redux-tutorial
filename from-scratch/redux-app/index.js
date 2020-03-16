const {applyMiddleware, createStore, combineReducers} = require('redux');
const thunk = require('from-scratch/redux-thunk').default;

// const reducer = (state, action) => {
//   if (action.type === 'SET_ENVIRONMENT' && action.environment === 'school') {
//     return {
//       environment: action.environment,
//       message: 'welcome to'
//     }
//   }
//
//   if (action.type === 'SET_ENVIRONMENT') {
//     return Object.assign(state, {
//       environment: action.environment
//     });
//   }
//
//   if (action.type === 'SET_MESSAGE') {
//     return Object.assign(state, {
//       message: action.message
//     });
//   }
//   return state;
// };

const environmentReducer = (state = '', action) => {
  if (action.type === 'SET_ENVIRONMENT') {
    return action.environment;
  }

  return state;
};

const messageReducer = (state = '', action) => {
  if (action.type === 'SET_MESSAGE') {
    return action.message;
  }

  if (action.type === 'SET_ENVIRONMENT' && action.environment === 'school') {
    return 'welcome to';
  }

  return state;
};

const reducer = combineReducers({
  environment: environmentReducer,
  message: messageReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const backendCall = ({post}) => new Promise((resolve, reject) => {
  if (post.environment === 'school') {
    resolve('we are going to');
  } else {
    reject('we are not going to');
  }
});

const setMessage = message => ({
  type: 'SET_MESSAGE',
  message
});

const setEnvironment = environment => ({
  type: 'SET_ENVIRONMENT',
  environment
});

const setAsyncEnvironment = (environment) =>
  async (dispatch, getState) => {
    const response = await backendCall({
      post: {
        environment: getState().environment
      }
    });

    console.log('updating environment');
    dispatch(setEnvironment(environment));
    console.log('updating message');
    dispatch(setMessage(response));
  };

store.dispatch(setMessage('hello'));
console.log(store.getState());
store.dispatch(setEnvironment('world'));
console.log(store.getState());
store.dispatch(setEnvironment('school'));
console.log(store.getState());
store.dispatch(setAsyncEnvironment('college'));
setTimeout(() => console.log(store.getState()), 1);
