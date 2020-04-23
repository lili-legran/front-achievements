const initialState = {};

export default function achievements(state = initialState, action) {
  if (action.type === 'SET_ACHIEVEMENTS') {
    return action.payload;
  }
  return state;
}
