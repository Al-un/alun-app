import { ActionContext } from 'vuex'
export interface RootState {
  token?: string
}

export type RootActionCtx = ActionContext<RootState, RootState>
