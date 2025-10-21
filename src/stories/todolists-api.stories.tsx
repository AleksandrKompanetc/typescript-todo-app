import { useState, useEffect } from "react"
import axios from 'axios'

const settings = {
  withCredentials: true
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    let promise = axios.get('')
    promise.then((res) => {

    })
  }, [])
}