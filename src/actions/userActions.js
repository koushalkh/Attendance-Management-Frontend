import { LOGIN_API_ENDPOINT } from "../backend";

export const login = (username, password) => dispatch => {
  console.log(JSON.stringify({ username: username, password: password }));
  fetch(LOGIN_API_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  })
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "LOGIN",
        payload: {
          type: result.type,
          token: result.token,
          id: username
        }
      });
    });
};

export const logout = post => dispatch => {
  dispatch({
    type: "LOGOUT_USER"
  });
  dispatch({
    type: "LOGOUT_STUDENT"
  });
};
