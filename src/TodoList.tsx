import React from 'react';
import { FilterValuesType } from './App';

// function sum(a: number, b: number) {
//   return a + b;
// }

type PropsType = {
  title: string;
  tasks?: Array<TaskType>;
  addTask: () => void;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

export function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button onClick={(event) => {
          event.preventDefault();
          props.addTask();
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