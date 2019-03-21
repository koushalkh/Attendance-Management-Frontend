const initialState = {
  studentID: 0
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state,
        studentID: action.payload
      };
    default:
      return state;
  }
};

export default studentReducer;
