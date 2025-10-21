import { useState, useEffect } from "react"
import axios from 'axios'

const settings = {
  withCredentials: true
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    axios.get('', settings)
      .then((res) => {
      setState(res.data)
    })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}