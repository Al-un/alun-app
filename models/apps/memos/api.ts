import { Board, Memo } from './entity'
import { ApiReqBasePayload, ApiReqEntityIdPayload } from '~/models/internal'

export interface ApiReqMemoBoardPayload extends ApiReqBasePayload {
  board: Board
}

export interface ApiReqMemoMemoPayload extends ApiReqBasePayload {
  boardId: string
  memo: Memo
}

export interface ApiReqMemoMemoIdPayload extends ApiReqEntityIdPayload {
  boardId: string
}
