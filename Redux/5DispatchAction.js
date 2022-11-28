const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
// Why do we pass dispatch loginAction() AND NOT loginAction!!????? It's a const??? NOT a ()!! BUT it does = a f(n) that returns an action which makes is = to an obj??
store.dispatch(loginAction());
