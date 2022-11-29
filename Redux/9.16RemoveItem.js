// Remove an Item from an Array
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [...(state.slice(0, action.index)),...state.slice(action.index+1, state.length)];
      // ^{Note: Notice the paranthesis in the 1st []!!}
      {/* https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/ */}
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

//Other answers are:
//return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
//return state.filter((_, index) => index !== action.index);
