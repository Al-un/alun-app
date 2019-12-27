import { API_BASE_URL, LS_TOKEN, getAuthHeader } from "./utils";

export const coreApi = {
  /**
   * Create a new user
   */
  registerUser: async ({ username, password }) => {
    const resp = await fetch(`${API_BASE_URL}/v1/users/register`, {
      method: "POST",
      credentials: "omit",
      body: JSON.stringify({
        username,
        password
      })
    });

    return await resp.json();
  },

  /**
   * Login uses Basic authentication
   */
  login: async ({ username, password }) => {
    const credential = btoa(`${username}:${password}`);

    const resp = await fetch(`${API_BASE_URL}/v1/users/login`, {
      method: "POST",
      headers: { Authorization: `Basic ${credential}` }
      // body: JSON.stringify({username, password})
    });

    // console.log(`Auth ${credential}`)

    if (resp.status === 200) {
      const { token } = await resp.json();

      // localStorage.removeItem(LS_TOKEN);
      localStorage.setItem(LS_TOKEN, token);
      return token;
    } else {
      throw new Error(
        `Error ${resp.status} when login for resp ${JSON.stringify(resp)}`
      );
    }
  },

  logout: async () => {
    const resp = await fetch(`${API_BASE_URL}/v1/users/logout`, {
      method: "POST",
      headers: {
        ...getAuthHeader()
      }
    });

    // console.log(`Auth ${credential}`)

    if (resp.status === 204) {
      return;
    } else {
      throw new Error(
        `Error ${resp.status} when logout for resp ${JSON.stringify(resp)}`
      );
    }
  }
};
