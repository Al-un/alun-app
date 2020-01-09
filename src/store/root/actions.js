import { coreApi } from "../../api/core";
import { mutationsName } from "./mutations";

export const actionsName = {
  login: "login",
  logout: "logout",
  createUser: "createUser"
};

export const actions = {
  [actionsName.login]: async ({ commit }, { username, password }) => {
    try {
      await coreApi.login({ username, password });
      commit(mutationsName.setToken, true);
    } catch (err) {
      console.log("Throwing error");
      throw err;
    }
  },

  [actionsName.logout]: async ({ commit }) => {
    await coreApi.logout();
    commit(mutationsName.deleteToken);
  },

  [actionsName.createUser]: async ({ dispatch }, { username, password }) => {
    const resp = await coreApi.registerUser({ username, password });

    console.log("Create user: ", resp);

    dispatch(actionsName.login, { username, password });
  }
};
