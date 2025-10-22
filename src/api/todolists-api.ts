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

type CreateTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {
    item: TodolistType
  }
}

type DeleteTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

type UpdateTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

export const todolistsAPI = {
  getTodolists() {
    const promise = axios.get<Array<TodolistType>>('', settings)
    return promise
  },
  createTodolist(title: string) {
    const promise = axios.post<CreateTodolistResponseType>('', {title: title}, settings)
    return promise
  },
  updateTodolist(id: string, title: string) {
    const promise = axios.put<UpdateTodolistResponseType>('' + id, {title: title}, settings)
    return promise
  },
  deleteTodolist(id: string) {
    const promise = axios.delete<DeleteTodolistResponseType>('' + id, settings)
    return promise
  }
}