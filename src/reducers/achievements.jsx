const initialState = {};

export default function achievements(state = initialState, action) {
  if (action.type === 'ACHIEVEMENTS/SET') {
    return action.payload;
  }

  if (action.type === 'ACHIEVEMENT/COMPLETE_ONE') {
    const currentArray = state[action.payload.language][action.payload.type];
    const currentArrayCopy = currentArray.map((el) => ({ ...el }));
    let currentIndex;
    currentArrayCopy.forEach((el, i) => {
      if (action.payload.id === el.id) {
        currentIndex = i;
      }
    });
    currentArrayCopy[currentIndex].completed = true;
    return {
      ...state,
      // javascript: {
      //   ...state.javascript,
      // }
      [action.payload.language]: {
        ...state[action.payload.language],
        [action.payload.type]: currentArrayCopy
      }
    };
  }
  return state;
}
