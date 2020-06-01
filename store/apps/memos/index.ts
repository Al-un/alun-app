import { MemosState, MemosActionCtx, Board } from '~/models/apps/memos'
import { memosApi } from '~/api/apps/memos'

export const state = (): MemosState => ({
  boards: []
})

export const actions = {
  loadBoards: async ({ commit, rootState }: MemosActionCtx) => {
    const token = rootState.token
    if (!token) {
      return
    }
    const boards = await memosApi.loadBoard({ token })

    commit('setBoards', boards)
  },

  createBoard: async ({ commit, rootState }: MemosActionCtx, board: Board) => {
    const token = rootState.token
    if (!token) {
      return
    }
    const newBoard = await memosApi.createBoard({ token, board })

    commit('addBoard', newBoard)
  }
}

export const mutations = {
  setBoards: (state: MemosState, boards: Board[]) => {
    state.boards = boards
  },

  addBoard: (state: MemosState, newBoard: Board) => {
    state.boards = [...state.boards, newBoard]
  },

  deleteBoard: (state: MemosState, boardId: string) => {
    state.boards = state.boards.filter((b) => b.id !== boardId)
  }
}
