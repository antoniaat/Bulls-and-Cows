import handleResponse from "../utils/handle-response";

const userService = {
  register: function(data) {
    return fetch(`http://localhost:9999/api/user/register`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse);
  },

  login: function(data) {
    return fetch(`http://localhost:9999/api/user/login`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include"
    }).then(handleResponse);
  },

  logout: function() {
    return fetch(`http://localhost:9999/api/user/logout`, {
      method: "POST",
      credentials: "include"
    }).then(handleResponse);
  },

  getAllUsers: function() {
    return fetch(`http://localhost:9999/api/user`, {
      method: "GET",
      credentials: "include"
    }).then(handleResponse);
  }
};

export default userService;
