const initialState = {
  studentID: undefined,
  student: {}
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state,
        student: action.payload
      };
    case "SET_STUDENT_ID":
      return {
        ...state,
        studentID: action.payload
      };
    case "LOGOUT_STUDENT":
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default studentReducer;
