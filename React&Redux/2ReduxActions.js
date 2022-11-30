// Extract State Logic to Redux
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

/* We're making a new ^action type which is 'ADD' -> then we make an action creator 'addMessage' which adds our newly created type 'ADD' as a type ??but we also need to accept a parameter 'message' & declare that variable -> so we can return an action object; which will include the type {were looking for} and the variable!!???? */
const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

// Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  switch(action.type) {
    case ADD:
    return [...previousState, action.message]
    // A default case to fall back on in case if the update to Redux store is not for this specific state.
    default:
    return previousState;
  }
}

const store = Redux.createStore(messageReducer);
