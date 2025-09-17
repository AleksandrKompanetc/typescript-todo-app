import React, { useState } from 'react';
import { FilterValuesType } from './App';

// function sum(a: number, b: number) {
//   return a + b;
// }

type PropsType = {
  title: string;
  tasks?: Array<TaskType>;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

export function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input 
          type="text"
          value={newTaskTitle}
          onChange={(e) => { setNewTaskTitle(e.currentTarget.value)} }
        />
        <button onClick={() => {
          props.addTask(newTaskTitle);
        }}>+</button>
      </div>
      <ul>
        {
          props.tasks ? props.tasks.map(task => <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => {
              props.removeTask(task.id)
            }}>x</button>
          </li>) : null
        }
      </ul>
      <div>
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </div >
  )
}