import {
  Board,
  ApiReqMemoMemoIdPayload,
  ApiReqMemoMemoPayload,
  Memo
} from '~/models/apps/memos'
import { HTTP } from '~/constants'
import { ApiReqBasePayload, ApiReqEntityIdPayload } from '~/models'
import { ApiReqMemoBoardPayload } from '~/models/apps/memos'

const API_URL_MEMOS = process.env.ALUN_API_URL_MEMOS

export const memosApi = {
  loadBoard: async ({ token }: ApiReqBasePayload): Promise<Board[]> => {
    const resp = await fetch(`${API_URL_MEMOS}/v1/boards`, {
      method: HTTP.METHOD.GET,
      mode: 'cors',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })

    const content: Board[] = await resp.json()
    return content
  },

  createBoard: async ({
    token,
    board
  }: ApiReqMemoBoardPayload): Promise<Board> => {
    const resp = await fetch(`${API_URL_MEMOS}/v1/boards`, {
      method: HTTP.METHOD.POST,
      mode: 'cors',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(board)
    })

    const content: Board = await resp.json()
    return content
  },

  createMemo: async ({
    token,
    boardId,
    memo
  }: ApiReqMemoMemoPayload): Promise<Memo> => {
    const resp = await fetch(`${API_URL_MEMOS}/v1/boards/${boardId}/memos`, {
      method: HTTP.METHOD.POST,
      mode: 'cors',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memo)
    })

    const content: Memo = await resp.json()
    return content
  },

  deleteMemo: async ({
    token,
    id,
    boardId
  }: ApiReqMemoMemoIdPayload): Promise<void> => {
    const resp = await fetch(
      `${API_URL_MEMOS}/v1/boards/${boardId}/memos/${id}`,
      {
        method: HTTP.METHOD.DELETE,
        mode: 'cors',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const content = await resp.json()
    return content
  },

  deleteBoard: async ({ token, id }: ApiReqEntityIdPayload): Promise<void> => {
    const resp = await fetch(`${API_URL_MEMOS}/v1/boards/${id}`, {
      method: HTTP.METHOD.DELETE,
      mode: 'cors',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })

    const content = await resp.json()
    return content
  }
}
