import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks-reducer";
import { todolistsReducer } from "./todolists-reducer";
import { TasksStateType, TodolistType } from "../AppWithReducers";

declare global {
  interface Window {
	store: typeof store;
  }
}

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer
})

// type AppRootState = {
//   todolists: Array<TodolistType>
//   tasks: TasksStateType
// }

type AppRootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

window.store = store;