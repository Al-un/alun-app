import { ActionContext, GetterTree } from 'vuex'
import { UserProfile } from './user'
export interface RootState {
  token?: string
  userProfile?: UserProfile
}

export type RootActionCtx = ActionContext<RootState, RootState>

export interface RootGetters extends GetterTree<RootState, RootState> {
  getTokenOrError: (state: RootState) => string
  isLogged: (state: RootState) => boolean
}

export interface RootComputedGetters {
  getTokenOrError: string
  isLogged: boolean
}
