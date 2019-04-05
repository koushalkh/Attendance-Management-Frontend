export const fetchTeahers = () => dispatch => {
  dispatch({
    type: "FETCH_TEACHERS",
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
