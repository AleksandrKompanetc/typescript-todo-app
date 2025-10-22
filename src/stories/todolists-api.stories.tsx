import { useState, useEffect } from "react"
import axios from 'axios'
import { todolistsAPI } from "../api/todolists-api"

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': ''
  }
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    todolistsAPI.getTodolists()
    // axios.get('', settings)
      .then((res) => {
      setState(res.data)
    })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    todolistsAPI.createTodolist('blabla Todolist')
    // axios.post('', { title: 'New todolist' }, settings)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  const todolistId = "your-todolist-id-here";

  useEffect(() => {
    todolistsAPI.deleteTodolist(todolistId)
    // axios.delete('', settings)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  const todolistId = "your-todolist-id"

  useEffect(() => {
    todolistsAPI.updateTodolist(todolistId, 'New todolist')
    // axios.put('', {title: 'Yoyo'}, settings)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}