const initialState = {
  studentID: 1,
  student: {}
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state,
        student: action.payload
      };
    default:
      return state;
  }
};

export default studentReducer;
