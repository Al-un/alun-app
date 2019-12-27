import Vue from "vue";
import VueRouter from "vue-router";
import { coreRoutes } from "./core";
import { memoRoutes } from "./memo";

export {
  CORE_HOME,
  CORE_USER_EDIT,
  CORE_USER_LOGIN,
  CORE_USER_REGISTER
} from "./core";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [...coreRoutes, ...memoRoutes]
});

export default router;
