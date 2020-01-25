import Home from "../views/core/Home.vue";
import UserEdit from "../views/core/UserEdit.vue";
import UserLogin from "../views/core/UserLogin.vue";
import UserRegister from "../views/core/UserRegister.vue";

export const CORE_HOME = "core-home";
export const CORE_USER_EDIT = "core-user-edit";
export const CORE_USER_LOGIN = "core-user-login";
export const CORE_USER_REGISTER = "core-user-register";

export const coreRoutes = [
  {
    path: "/",
    name: CORE_HOME,
    component: Home
  },
  {
    path: "/user/edit",
    name: CORE_USER_EDIT,
    component: UserEdit
  },
  {
    path: "/login",
    name: CORE_USER_LOGIN,
    component: UserLogin
  },
  {
    path: "/user/new",
    name: CORE_USER_REGISTER,
    component: UserRegister
  }
];
