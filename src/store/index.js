import Vue from "vue";
import Vuex from "vuex";

import { initState as rootState } from "./root/state";
import { mutations as rootMutations } from "./root/mutations";
import { actions as rootActions } from "./root/actions";
import memo from "./memo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: rootState(),
  actions: rootActions,
  mutations: rootMutations,
  modules: {
    memo: memo
  }
});
