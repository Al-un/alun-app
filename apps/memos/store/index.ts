import { MemosState, MemosActionCtx, Board } from '~/apps/memos/models'
import { memosApi } from '~/apps/memos/api'

export const state = (): MemosState => ({
  boards: []
})

export const actions = {
  loadBoards: async ({ commit, rootGetters }: MemosActionCtx) => {
    const token = rootGetters.getTokenOrError
    const boards = await memosApi.loadBoard({ token })

    commit('setBoards', boards)
  },

  createBoard: async (
    { commit, rootGetters }: MemosActionCtx,
    board: Board
  ) => {
    const token = rootGetters.getTokenOrError
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
