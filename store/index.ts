import { LS_USER_TOKEN } from '~/constants'
import { RootActionCtx, RootState } from '~/models'

export const state = () => ({
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
  // token: localStorage.getItem(LS_USER_TOKEN) ?? undefined,
  token: undefined
})

export const actions = {
  saveToken: ({ commit }: RootActionCtx, token: string) => {
    commit('setToken', token)
  }
}

export const mutations = {
  setToken: (state: RootState, newToken?: string) => {
    state.token = newToken

    if (newToken) {
      localStorage.setItem(LS_USER_TOKEN, newToken)
    }
  }
}
