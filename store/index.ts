import { LS_USER_TOKEN } from '~/constants'
import { RootActionCtx, RootState, UserProfile } from '~/models'

export const state = () => ({
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
  // token: localStorage.getItem(LS_USER_TOKEN) ?? undefined,
  token: undefined,
  userProfile: undefined
})

export const actions = {
  saveToken: ({ commit }: RootActionCtx, token: string) => {
    commit('setToken', token)

    if (token) {
      const match = token.match(/\.(.*)\./)
      if (match !== null) {
        const userInfo: any = JSON.parse(window.atob(match[1]))
        const userProfile: UserProfile = {
          id: userInfo.userId || '',
          email: userInfo.email || '',
          username: userInfo.username || ''
        }

        commit('setUserProfile', userProfile)
      }
    }
  }
}

export const mutations = {
  setToken: (state: RootState, newToken?: string) => {
    state.token = newToken

    if (newToken) {
      localStorage.setItem(LS_USER_TOKEN, newToken)
    }
  },

  setUserProfile: (state: RootState, newUserProfile?: UserProfile) => {
    state.userProfile = newUserProfile
  }
}

export const getters = {
  isLogged: (state: RootState): boolean => {
    return !!state.token
  }
}
