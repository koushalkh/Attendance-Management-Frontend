const initialState = {
  type: undefined,
  KEY: undefined
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        type: action.payload["type"],
        KEY: action.payload["KEY"]
      };
    case "LOGOUT_USER":
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default userReducer;
