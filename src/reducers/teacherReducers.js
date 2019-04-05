const initialState = {
  // studentID: undefined,
  teacher: {}
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TEACHER":
      return {
        ...state,
        teacher: action.payload
      };
    case "LOGOUT_TEACHER":
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default teacherReducer;
