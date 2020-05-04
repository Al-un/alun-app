import { ActionContext } from 'vuex'
import { RootState } from '../store'

export type LoginStatus = 'none' | 'processing' | 'success' | 'error'

export interface UserState {
  token?: string
  loginStatus: LoginStatus
}

export type UserActionCtx = ActionContext<UserState, RootState>
