import { TasksStateType } from "../App";

export type RemoveTaskActionType = {
  type: 'REMOVE_TASK'
  todolistId: string
  taskId: string
}

export type AddTaskActionType = {
  type: 'ADD_TASK'
  title: string
  todolistId: string
}

export type changeTaskStatusActionType = {
  type: 'CHANGE-TASK-STATUS'
  taskId: string
  isDone: boolean
  todolistId: string
}

export type changeTaskTitleActionType = {
  type: 'CHANGE-TASK-TITLE'
  taskId: string
  newTitle: string
  todolistId1: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | changeTaskStatusActionType | changeTaskTitleActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE_TASK': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId];
      const filteredTasks = tasks.filter(t => t.id !== action.taskId);
      stateCopy[action.todolistId] = filteredTasks;
      return stateCopy;
    }
    case 'ADD_TASK': {
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
        task.isDone = action.isDone;
      }
      return stateCopy;
    }
    case 'CHANGE-TASK-TITLE': {
      const stateCopy = {...state};
      const tasks = stateCopy[action.todolistId2];
      const task = tasks.find(t => t.id === action.taskId);
      if (task) {
        task.title = action.newTitle;
      }
      return stateCopy;
    }
    default: 
      throw new Error('I don\'t understand this action type');
  }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
  return {type: 'REMOVE_TASK', todolistId, taskId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
  return {type: 'ADD_TASK', title, todolistId}
}

export const changeStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusActionType => {
  return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}
}

export const changeTitleAC = (taskId: string, newTitle: string, todolistId2: string) => {
  return {type: 'CHANGE-TASK-TITLE', taskId, newTitle, todolistId2}
}