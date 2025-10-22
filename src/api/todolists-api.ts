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

export const todolistsAPI = {
  getTodolists() {
    const promise = axios.get<Array<TodolistType>>('', settings)
    return promise
  },
  createTodolist(title: string) {
    const promise = axios.post('', {title: title}, settings)
    return promise
  },
  updateTodolist(id: string, title: string) {
    const promise = axios.put('' + id, {title: title}, settings)
    return promise
  },
  deleteTodolist(id: string) {
    const promise = axios.delete('' + id, settings)
    return promise
  }
}