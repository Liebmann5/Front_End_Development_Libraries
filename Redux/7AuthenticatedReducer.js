// Use a Switch Statement to Handle Multiple Actions
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
    state = {authenticated: true};
    return state;
    case 'LOGOUT':
    state = defaultState;
    return state;
    default:
    return defaultState;
  }
  
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
