import Vue from "vue";
import Vuex from "vuex";
import { initState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const memoModule = {
  namespaced: true,
  state: initState(),
  mutations: mutations,
  actions: actions
};

export default memoModule;
