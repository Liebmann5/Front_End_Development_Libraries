const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  {/*  Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
 */}
  if (action.type == 'LOGIN')
    return {login: true}
  else
    return state
  // How is anything passed to the reducer??? Then in the if how can we just do {login: true} shouldn't it be something like {defaultState.login = true}????
  // 2ndly doesn't only the store know the current State... which means it should get {store.getState()}????
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
