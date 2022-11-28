// Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Why does {state: action.text} not work??? I thought we had to return a new state???
    // Maybe b/c this is just a note and is seperate from state????
    case ADD_NOTE:
      return action.text;
    
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {type: ADD_NOTE, text: note};
  
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
