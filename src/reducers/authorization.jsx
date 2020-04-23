const initialState = {
  isAuthorized: false
};

export default function authorization(state = initialState, action) {
  if (action.type === 'SET_IS_AUTHORIZED') {
    return {
      ...state,
      isAuthorized: action.payload
    };
  }
  return state;
}
