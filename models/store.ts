import { ActionContext } from 'vuex'
import { UserProfile } from './user'
export interface RootState {
  token?: string
  userProfile?: UserProfile
}

export type RootActionCtx = ActionContext<RootState, RootState>
