import React, { useState } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';

// function sum(a: number, b: number) {
//   return a + b;
// }

type PropsType = {
  id: string;
  title: string;
  tasks?: Array<TaskType>;
  addTask: (title: string, todolistId: string) => void;
  removeTask: (id: string, todolistId: string) => void;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  filter: FilterValuesType;
  removeTodolist: (todolistId: string) => void;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

export function TodoList(props: PropsType) {
  const onAllClickHandler = () => props.changeFilter('all', props.id);
  const onActiveClickHandler = () => props.changeFilter('active', props.id);
  const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
  const removeTodolist = () => props.removeTodolist(props.id);

  return (
    <div>
      <h3>{props.title} <button onClick={removeTodolist}>x</button></h3>
      <AddItemForm 
        id={props.id} 
        addTask={props.addTask} 
      />
      <ul>
        {
          props.tasks ? props.tasks.map(task => {

            const onRemoveHandler = () => {
              props.removeTask(task.id, props.id)
            }
            const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(task.id, e.currentTarget.checked, props.id);
            }

            return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={onChangeHandler}
              />
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          }) : null
        }
      </ul>
      <div>
        <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
        <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
        <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div >
  )
}