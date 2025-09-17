import React from 'react';
import { TodoList } from './TodoList';
import './App.css';
import { TaskType } from './TodoList';

export default function App() {

  let tasks1: Array<TaskType> = [
    { id: 1, title: 'CSS', isDone: true},
    { id: 2, title: 'JS', isDone: true},
    { id: 3, title: 'React', isDone: false},
    { id: 4, title: 'Redux', isDone: true}
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: 'VueJS', isDone: false},
    { id: 2, title: 'Next', isDone: true},
    { id: 3, title: 'Nest', isDone: false}
  ]

  return (
    <div className='App'>
      <TodoList title="What to learn" tasks={tasks1} />
      <TodoList title="Movies" tasks={tasks2} />
      <TodoList title="Songs" />
    </div>
  )
}