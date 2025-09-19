import React, {useState} from 'react';
import { TodoList } from './TodoList';
import './App.css';
import { TaskType } from './TodoList';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: 'CSS', isDone: true},
    { id: v1(), title: 'JS', isDone: true},
    { id: v1(), title: 'React', isDone: false},
    { id: v1(), title: 'Redux', isDone: true}
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

  function addTask(title: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function removeTask(id: string) {
    let FilteredTasks = tasks.filter(t => t.id !== id);
    setTasks(FilteredTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks(tasks);
  }

  return (
    <div className='App'>
      <TodoList 
        title="What to learn" 
        tasks={tasksForTodoList} 
        changeFilter={changeFilter}
        addTask={addTask}
        removeTask={removeTask} 
      />
      {/* <TodoList title="Movies" tasks={tasks2} />
      <TodoList title="Songs" /> */}
    </div>
  )
}