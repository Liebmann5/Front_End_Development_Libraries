// Never Mutate State
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      state = state.concat(action.todo);
      // Since objects and arrays are mutable, you can add to it by index (array[3] = 3), by property (object.name=“sam”), by extending (with various array methods)
      // .concat() doesn’t modify array but just returns a new array
      return state;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
