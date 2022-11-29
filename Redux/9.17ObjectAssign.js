// Copy an Object with Object.assign
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      // The obj2 should be the updated {key: value} pair of your state.
      const newObject = Object.assign({}, state, {status: 'online'});
      // 2so why can't I just put action.type or action.type.toString() so ONLINE is printed!???
      // Note: I think it's because 'state' is the MasterKey here and we're looking to make a new state object!! And also specifically switching status => "online" so with my thinking all I did was print online but never assigned it to any property!???
      return newObject;
    default:
      return state;
  }
};
// 1This is the action creator which ALWAYS returns an action object???
const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
