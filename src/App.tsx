import React, {useState} from 'react';
import { TodoList } from './TodoList';
import './App.css';
import { TaskType } from './TodoList';

export type FilterValuesType = 'all' | 'active' | 'completed';

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: 'CSS', isDone: true},
    { id: 2, title: 'JS', isDone: true},
    { id: 3, title: 'React', isDone: false},
    { id: 4, title: 'Redux', isDone: true}
  ]);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  // let tasks2: Array<TaskType> = [
  //   { id: 1, title: 'VueJS', isDone: false},
  //   { id: 2, title: 'Next', isDone: true},
  //   { id: 3, title: 'Nest', isDone: false}
  // ]

  let tasksForTodoList = tasks;
  if (filter === 'active') {
    tasksForTodoList = tasks.filter(t => t.isDone === false);
  }
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter(t => t.isDone === true);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  function removeTask(id: number) {
    let FilteredTasks = tasks.filter(t => t.id !== id);
    setTasks(FilteredTasks);
  }

  return (
    <div className='App'>
      <TodoList 
        title="What to learn" 
        tasks={tasksForTodoList} 
        changeFilter={changeFilter}
        removeTask={removeTask} 
      />
      {/* <TodoList title="Movies" tasks={tasks2} />
      <TodoList title="Songs" /> */}
    </div>
  )
}