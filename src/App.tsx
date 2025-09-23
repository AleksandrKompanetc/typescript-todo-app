import React, { useState } from 'react';
import { TodoList } from './TodoList';
import './App.css';
import { TaskType } from './TodoList';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
}

export default function App() {
  // const [tasks, setTasks] = useState<Array<TaskType>>([
  //   { id: v1(), title: 'CSS', isDone: true },
  //   { id: v1(), title: 'JS', isDone: true },
  //   { id: v1(), title: 'React', isDone: false },
  //   { id: v1(), title: 'Redux', isDone: true }
  // ]);

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function removeTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let FilteredTasks = tasks.filter(t => t.id !== id);
    tasksObj[todolistId] = FilteredTasks;
    setTasksObj({...tasksObj});
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: 'What to learn', filter: 'active' },
    { id: todolistId2, title: 'What to buy', filter: 'completed' }
  ])

  let [tasksObj, setTasksObj] = useState({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', filter: 'true' },
      { id: v1(), title: 'JS', filter: 'true' },
      { id: v1(), title: 'ReactJS', filter: 'false' },
      { id: v1(), title: 'Rest API', filter: 'false' },
      { id: v1(), title: 'GraphQL', filter: 'false' }
    ],
    [todolistId2]: [
      { id: v1(), title: 'Book', filter: 'false' },
      { id: v1(), title: 'Milk', filter: 'true' },
    ]
  })

  return (
    <div className='App'>
      {
        todolists.map((tl) => {

          let tasksForTodolists = tasks[tl.id];

          if (tl.filter === 'active') {
            tasksForTodolists = tasksForTodolists.filter(t => t.isDone === false);
          }
          if (tl.filter === 'completed') {
            tasksForTodolists = tasksForTodolists.filter(t => t.isDone === true);
          }

          return <TodoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolists}
            changeFilter={changeFilter}
            addTask={addTask}
            removeTask={removeTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
          />
        })
      }
    </div>
  )
}