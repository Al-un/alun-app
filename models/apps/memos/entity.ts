export interface Board {
    id: string
    title: string
    description: string
    access: number
    memos: Memo[]
    createdAt: Date
  }
  
  export interface Memo {
    id: string
    title: string
    description: string
    items: MemoItem[]
  }
  
  export interface MemoItem {
    text: string
    isFinished: boolean
    dueDate: Date
  }
  