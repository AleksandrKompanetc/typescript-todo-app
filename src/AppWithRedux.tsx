import React, { useReducer, useState, useCallback } from 'react';
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

  const addTask = useCallback((title: string, todolistId: string) {
    const action = addTaskAC(title, todolistId);
    dispatch(action);
  }, []);

  const removeTask = useCallback((id: string, todolistId: string) => {
    const action = removeTaskAC(id, todolistId);
    dispatch(action);
  }, []);

  const changeStatus = useCallback((taskId: string, isDone: boolean, todolistId: string) {
    const action = changeTaskStatusAC(taskId, isDone, todolistId);
    dispatch(action);
  }, []);

  const changeTaskTitle = useCallback((taskId: string, newValue: string, todolistId: string) {
    const action = changeTaskTitleAC(taskId, newValue, todolistId);
    dispatch(action);
  }, []);

  const changeFilter = useCallback((value: FilterValuesType, todolistId: string) {
    const action = changeTodolistFilterAC(value, todolistId);
    dispatch(action);
  }, []);

  const removeTodolist = useCallback((todolistId: string) {
    const action = removeTodolistAC(todolistId);
    dispatch(action);
  }, []);

  const changeTodolistTitle = useCallback((id: string, newTitle: string) => {
    const action = changeTodolistTitleAC(id, newTitle);
    dispatch(action);
  }, []);

  const addTodolist = useCallback((title: string) => {
    const action = addTodolistAC(title);
    dispatch(action);
  }, []);

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
              
              // if (tl.filter === 'active') {
              //   tasksForTodolists = tasksForTodolists.filter(t => t.isDone === false);
              // }
              // if (tl.filter === 'completed') {
              //   tasksForTodolists = tasksForTodolists.filter(t => t.isDone === true);
              // }

              return <Grid>
                <Paper style={{ padding: '10px' }}>
                  <TodoList
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolists}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    removeTask={removeTask}
                    changeTaskStatus={changeStatus}
                    changeTaskTitle={changeTaskTitle}
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