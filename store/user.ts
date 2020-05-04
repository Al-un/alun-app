import { LS_USER_TOKEN } from '~/constants'
import {
  UserState,
  LoginStatus,
  Credentials,
  UserActionCtx
} from '~/models/user'
import { userApi } from '~/api/user'

export const state = () => ({
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
  // token: localStorage.getItem(LS_USER_TOKEN) ?? undefined,
  token: undefined,
  loginStatus: 'none'
})

export const actions = {
  login: async ({ commit }: UserActionCtx, credentials: Credentials) => {
    commit('setLoginStatus', 'processing')

    try {
      const result = await userApi.login(credentials)

      if (result.success) {
        commit('setLoginStatus', 'success')
        commit('setToken', result.token)
      } else {
        commit('setLoginStatus', 'error')
      }
    } catch (err) {
      console.warn(err)
      commit('setLoginStatus', 'error')
    }
  }
}

export const mutations = {
  setLoginStatus: (state: UserState, newStatus: LoginStatus) => {
    state.loginStatus = newStatus
  },

  setToken: (state: UserState, newToken?: string) => {
    state.token = newToken

    if (newToken) {
      localStorage.setItem(LS_USER_TOKEN, newToken)
    }
  }
}
