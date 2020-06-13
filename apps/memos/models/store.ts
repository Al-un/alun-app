import { ActionContext } from 'vuex'

import { Board } from './entity'
import { RootState, RootComputedGetters } from '~/models/store'

export interface MemosState {
  boards: Board[]
}

export interface MemosActionCtx extends ActionContext<MemosState, RootState> {
  rootGetters: RootComputedGetters
}
