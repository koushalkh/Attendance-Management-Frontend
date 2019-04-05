const initialState = {
  // studentID: undefined,
  manager: {}
};

const managementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MANAGER":
      return {
        ...state,
        manager: action.payload
      };
    case "LOGOUT_MANAGER":
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default managementReducer;
