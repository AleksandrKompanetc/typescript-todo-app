import React, { useReducer, useState } from 'react';
import { TodoList } from './TodoList';
import './App.css';
import { TaskType } from './TodoList';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';
import { AppBar, Button, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { todolistsReducer } from './state/todolists-reducer';
import { tasksReducer } from './state/tasks-reducer';
import { removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './state/tasks-reducer';
import { changeTodolistFilterAC, removeTodolistAC, changeTodolistTitleAC, addTodolistAC } from './state/todolists-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './state/store';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export default function AppWithRedux() {

  const dispatch = useDispatch();
  const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists);
  const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks);

  // const [tasks, setTasks] = useState<Array<TaskType>>([
  //   { id: v1(), title: 'CSS', isDone: true },
  //   { id: v1(), title: 'JS', isDone: true },
  //   { id: v1(), title: 'React', isDone: false },
  //   { id: v1(), title: 'Redux', isDone: true }
  // ]);

  function changeFilter(value: FilterValuesType, todolistId: string) {
    const action = changeTodolistFilterAC(value, todolistId);
    dispatch(action);
    // let todolist = todolists.find(tl => tl.id === todolistId);
    // if (todolist) {
    //   todolist.filter = value;
    //   setTodolists([...todolists]);
    // }
  }

  // function addTask(title: string, todolistId: string) {
  //   const action = addTaskAC(title, todolistId);
  //   dispatch(action);

  //   let newTask = { id: v1(), title: title, isDone: false };
  //   let tasks = tasksObj[todolistId];
  //   let newTasks = [newTask, ...tasks];
  //   tasksObj[todolistId] = newTasks;
  //   setTasksObj({ ...tasksObj });
  // }

  // function removeTask(id: string, todolistId: string) {
  //   const action = removeTaskAC(id, todolistId);
  //   dispatch(action);

  //   let tasks = tasksObj[todolistId];
  //   let FilteredTasks = tasks.filter(t => t.id !== id);
  //   tasksObj[todolistId] = FilteredTasks;
  //   setTasksObj({ ...tasksObj });
  // }

  // function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
  //   const action = changeTaskStatusAC(taskId, isDone, todolistId);
  //   dispatch(action);

  //   let tasks = tasksObj[todolistId];
  //   let task = tasks.find(t => t.id === taskId);
  //   if (task) {
  //     task.isDone = isDone;
  //     setTasksObj({ ...tasksObj });
  //   }
  // }

  // function changeTaskTitle(taskId: string, newValue: string, todolistId: string) {
  //   const action = changeTaskTitleAC(taskId, newValue, todolistId);
  //   dispatch(action);

  //   let tasks = tasksObj[todolistId];
  //   let task = tasks.find(t => t.id === taskId);
  //   if (task) {
  //     task.title = newValue;
  //     setTasksObj({ ...tasksObj });
  //   }
  // }

  // let [todolists, dispatchToTodolistsReducer] = useReducer(todolistsReducer, [
  //   { id: todolistId1, title: 'What to learn', filter: 'all' },
  //   { id: todolistId2, title: 'What to buy', filter: 'all' }
  // ])

  function removeTodolist(todolistId: string) {
    const action = removeTodolistAC(todolistId);
    dispatch(action);
    // let filteredTodolist = todolists.filter(tl => tl.id !== todolistId);
    // setTodolists(filteredTodolist);
    // delete tasksObj[todolistId];
    // setTasksObj({ ...tasksObj });
  }

  function changeTodolistTitle(id: string, newTitle: string) {
    const action = changeTodolistTitleAC(id, newTitle);
    dispatch(action);
    // const todolist = todolists.find(tl => tl.id === id);
    // if (todolist) {
    //   todolist.title = newTitle;
    //   setTodolists([...todolists]);
    // }
  }



  // let [tasksObj, dispatchToTasksReducer] = useReducer(tasksReducer, {
  //   [todolistId1]: [
  //     { id: v1(), title: 'HTML&CSS', isDone: true },
  //     { id: v1(), title: 'JS', isDone: true },
  //     { id: v1(), title: 'ReactJS', isDone: false },
  //     { id: v1(), title: 'Rest API', isDone: false },
  //     { id: v1(), title: 'GraphQL', isDone: false }
  //   ],
  //   [todolistId2]: [
  //     { id: v1(), title: 'Book', isDone: false },
  //     { id: v1(), title: 'Milk', isDone: true },
  //   ]
  // })

  function addTodolist(title: string) {
    const action = addTodolistAC(title);
    dispatch(action);
    // let todolist: TodolistType = {
    //   id: v1(),
    //   title: title,
    //   filter: 'all'
    // }
    // setTodolists([todolist, ...todolists])
    // setTasksObj({
    //   ...tasksObj,
    //   [todolist.id]: []
    // })
  }

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6'>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: '20px' }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {
            todolists && todolists.map((tl) => {

              let tasksForTodolists = tasks[tl.id];

              if (tl.filter === 'active') {
                tasksForTodolists = tasksForTodolists.filter(t => t.isDone === false);
              }
              if (tl.filter === 'completed') {
                tasksForTodolists = tasksForTodolists.filter(t => t.isDone === true);
              }

              return <Grid>
                <Paper style={{ padding: '10px' }}>
                  <TodoList
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    // tasks={tasksForTodolists}
                    changeFilter={changeFilter}
                    // addTask={addTask}
                    // removeTask={removeTask}
                    // changeTaskStatus={changeStatus}
                    // changeTaskTitle={changeTaskTitle}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    changeTodolistTitle={changeTodolistTitle}
                  />
                </Paper>
              </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  )
}