import { ActionContext } from 'vuex'

import { Board } from './entity'
import { RootState } from '~/models/store'

export interface MemosState {
  boards: Board[]
}

export type MemosActionCtx = ActionContext<MemosState, RootState>
