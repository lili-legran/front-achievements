const initialState = {
  isAuthorized: false
};

export default function authorization(state = initialState, action) {
  if (action.type === 'AUTHORIZATION/SET') {
    return {
      ...state,
      isAuthorized: action.payload
    };
  }
  return state;
}
