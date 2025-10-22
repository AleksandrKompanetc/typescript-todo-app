import axios from 'axios'

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': ''
  }
}

const instance = axios.create({
  baseURL: '',
  ...settings
})

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
    const promise = instance.get<Array<TodolistType>>('todo-lists')
    return promise
  },
  createTodolist(title: string) {
    const promise = instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title: title})
    return promise
  },
  updateTodolist(id: string, title: string) {
    const promise = instance.put<ResponseType<{}>>('todo-lists' + id, {title: title})
    return promise
  },
  deleteTodolist(id: string) {
    const promise = instance.delete<ResponseType<{}>>('' + id)
    return promise
  },
  getTasks(todolistId: number) {
    return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
  }
}