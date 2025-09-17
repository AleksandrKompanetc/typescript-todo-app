import React from 'react';

function sum(a: number, b: number) {
  return a + b;
}

type PropsType = {
  title: string;
  tasks?: Array<TaskType>;
}

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
}

export function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks ? props.tasks.map(task => <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
          </li>) : null
        }
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div >
  )
}