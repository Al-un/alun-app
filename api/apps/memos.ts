import { ApiBase } from '../base'
import {
  Board,
  ApiReqMemoBoardPayload,
  ApiReqMemoMemoIdPayload,
  ApiReqMemoMemoPayload,
  Memo
} from '~/models/apps/memos'
import { ApiReqBasePayload, ApiReqEntityIdPayload } from '~/models'

const API_URL_MEMOS = process.env.ALUN_API_URL_MEMOS

class ApiMemos extends ApiBase {
  constructor() {
    super({ baseUrl: API_URL_MEMOS })
  }

  async loadBoard({ token }: ApiReqBasePayload): Promise<Board[]> {
    const boards = await this.get<Board[]>('/v1/boards', { token })

    return boards
  }

  async createBoard({ token, board }: ApiReqMemoBoardPayload): Promise<Board> {
    const createdBoard = await this.post<Board>('/v1/boards', board, { token })

    return createdBoard
  }

  async createMemo({
    token,
    boardId,
    memo
  }: ApiReqMemoMemoPayload): Promise<Memo> {
    const createdMemo = await this.post<Memo>(
      `/v1/boards/${boardId}/memos`,
      memo,
      { token }
    )

    return createdMemo
  }

  async deleteMemo({
    token,
    id,
    boardId
  }: ApiReqMemoMemoIdPayload): Promise<void> {
    const resp = await this.delete<void>(`/v1/boards/${boardId}/memos/${id}`, {
      token
    })

    return resp
  }

  async deleteBoard({ token, id }: ApiReqEntityIdPayload): Promise<void> {
    const resp = await this.delete<void>(`/v1/boards/${id}`, {
      token
    })

    return resp
  }
}

export const memosApi = new ApiMemos()
