import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-reducer';
import { TasksStateType } from "../App";
import { v1 } from 'uuid';

export type RemoveTaskActionType = {
  type: 'REMOVE_TASK'
  todolistId: string
  taskId: string
}

export type AddTaskActionType = {
  type: 'ADD-TASK'
  title: string
  todolistId: string
}

export type ChangeTaskStatusActionType = {
  type: 'CHANGE-TASK-STATUS'
  taskId: string
  todolistId: string
  isDone: boolean
}

export type ChangeTaskTitleActionType = {
  type: 'CHANGE-TASK-TITLE'
  taskId: string
  newTitle: string
  todolistId: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodolistActionType | RemoveTodolistActionType;

const initialState: TasksStateType = {
    // 'todolistId1': [
    //   { id: '1', title: 'CSS', isDone: false },
    //   { id: '2', title: 'JS', isDone: true },
    //   { id: '3', title: 'React', isDone: false } 
    // ],
    // 'todolistId2': [
    //   { id: '1', title: 'bread', isDone: false},
    //   { id: '2', title: 'milk', isDone: false },
    //   { id: '3', title: 'tea', isDone: false }
    // ]
  }

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE_TASK': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId];
      const filteredTasks = tasks.filter(t => t.id !== action.taskId);
      stateCopy[action.todolistId] = filteredTasks;
      return stateCopy;
    }
    case 'ADD-TASK': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId];
      const newTask = {id: v1(), title: action.title, isDone: false};
      const newTasks = [newTask, ...tasks];
      stateCopy[action.todolistId] = newTasks;
      return stateCopy;
    }
    case 'CHANGE-TASK-STATUS': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId];
      const task = tasks.find(t => t.id === action.taskId);
      if (task) {
        let newTask = {...task, isDone: action.isDone};
        // task.isDone = action.isDone;
      }
      stateCopy[action.todolistId] = [...tasks, newTask];
      return stateCopy;
    }
    case 'CHANGE-TASK-TITLE': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId];
      const task = tasks.find(t => t.id === action.taskId);
      if (task) {
        task.title = action.newTitle;
      }
      stateCopy[action.todolistId] = [...tasks];
      return stateCopy;
    }
    case 'ADD-TODOLIST': {
      const stateCopy = {...state};
      stateCopy[action.todolistId] = [];
      return stateCopy;
    }
    case 'REMOVE-TODOLIST': {
      const stateCopy = {...state};
      delete stateCopy[action.id];
      return stateCopy;
    }
    default: 
      return state;
  }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
  return {type: 'REMOVE_TASK', todolistId, taskId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
  return {type: 'ADD-TASK', title, todolistId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
  return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}
}

export const changeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string): ChangeTaskTitleActionType => {
  return {type: 'CHANGE-TASK-TITLE', taskId, newTitle, todolistId}
}

export const addTodolistAC = (title: string, todolistId: string): AddTodolistActionType => {
  return {type: 'ADD-TODOLIST', title, todolistId}
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
  return {type: 'REMOVE-TODOLIST', id: todolistId}
}