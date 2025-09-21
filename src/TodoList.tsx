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
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: FilterValuesType;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

export function TodoList(props: PropsType) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      props.addTask(title);
      setTitle('');
    }
  }

  const addTask = () => {
    if (title.trim() !== '') {
      props.addTask(title);
      setTitle('');
    } else {
      setError('Title is required');
    }
  }

  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={onNewTitleChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? 'error' : ''}
        />
        <button onClick={addTask}>+</button>
        {error && <div className='error-message'>{error}</div>}
      </div>
      <ul>
        {
          props.tasks ? props.tasks.map(task => {

            const onRemoveHandler = () => {
              props.removeTask(task.id)
            }
            const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(task.id, e.currentTarget.checked);
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