import { LS_TOKEN } from "../../api/utils";

export const mutationsName = {
  setToken: "setToken",
  deleteToken: "deleteToken"
};

export const mutations = {
  [mutationsName.setToken]: (state, token) => {
    state.token = token;
  },

  [mutationsName.deleteToken]: state => {
    state.token = undefined;
    localStorage.removeItem(LS_TOKEN);
  }
};
