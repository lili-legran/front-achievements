const initialState = false;

export default function loading(state = initialState, action) {
  if (action.type === 'LOADING/SET') {
    return action.payload;
  }
  return state;
}
