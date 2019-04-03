export const login = post => dispatch => {
  let type = "student";
  let id = 10;
  dispatch({
    type: "LOGIN",
    payload: {
      type: type, //TODO: change this based on result
      KEY: "SDKJCBA63IADJBDS7336A"
    }
  });

  if (type === "student") {
    dispatch({
      type: "SET_STUDENT_ID",
      payload: id
    });
  }
};

export const logout = post => dispatch => {
  dispatch({
    type: "LOGOUT_USER"
  });
  dispatch({
    type: "LOGOUT_STUDENT"
  });
};
