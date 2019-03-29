export const fetchStudents = () => dispatch => {
  dispatch({
    type: "FETCH_STUDENTS",
    payload: {
      username: "Madan",
      class: "6A",
      email: "madan@rnsit.ac.in",
      phone: "807625412",
      profile_url:
        "https://react.semantic-ui.com/images/wireframe/square-image.png"
    }
  });
};
