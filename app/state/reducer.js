const initialState = {
  name: '',
};

function reducer(state = initialState, action = {}) {
  const { payload } = action;

  switch (action.type) {
  case 'SET_NAME': {
    return { ...state, token: payload };
  }
  default:
    return state;
  }
}

export default reducer;
