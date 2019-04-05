const initialState = {
  type: undefined,
  token: undefined,
  id: undefined
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        type: action.payload["type"],
        token: action.payload["token"],
        id: action.payload["id"]
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
