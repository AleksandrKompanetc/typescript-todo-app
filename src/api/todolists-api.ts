import axios from 'axios'

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': ''
  }
}

export type TodolistType = {
  id: string
  title: string
  addedData: string
  order: 
}

// type CreateTodolistResponseType = {
//   resultCode: number
//   messages: Array<string>
//   data: {
//     item: TodolistType
//   }
// }

// type DeleteTodolistResponseType = {
//   resultCode: number
//   messages: Array<string>
//   data: {}
// }

// type UpdateTodolistResponseType = {
//   resultCode: number
//   messages: Array<string>
//   data: {}
// }

type ResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}

export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todolistId: string
  order: number
  addedDate: string
}

type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: TaskType[]
}

export const todolistsAPI = {
  getTodolists() {
    const promise = axios.get<Array<TodolistType>>('', settings)
    return promise
  },
  createTodolist(title: string) {
    const promise = axios.post<ResponseType<{item: TodolistType}>>('', {title: title}, settings)
    return promise
  },
  updateTodolist(id: string, title: string) {
    const promise = axios.put<ResponseType<{}>>('' + id, {title: title}, settings)
    return promise
  },
  deleteTodolist(id: string) {
    const promise = axios.delete<ResponseType<{}>>('' + id, settings)
    return promise
  },
  getTasks(todolistId: number) {
    const promise = axios.get<GetTasksResponse>('' + todolistId)
    return promise
  }
}