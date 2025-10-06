import { TasksStateType } from "../App";

export type Action1Type = {
  type: string,
  id: string
}

export type Action2Type = {
  type: string,
  title: string
}

type ActionsType = Action1Type | Action2Type;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case '1': {
      return {...state};
    }
    case '2': {
      return {...state};
    }
    default: 
      throw new Error('I don\'t understand this action type');
  }
}

export const action1AC = (id: string): Action1Type => {
  return {type: '1', id}
}

export const action2AC = (title: string): Action2Type => {
  return {type: '2', title}
}