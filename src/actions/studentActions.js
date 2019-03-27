export const fetchStudents = () => dispatch => {
  dispatch({
    type: "FETCH_STUDENTS",
    payload: {
      username: "Madan",
      class: "6A",
      email: "madan@mad.com",
      phone: "807625412"
    }
  });
};
