import { tasksReducer } from './tasks-reducer';
import { TasksStateType } from "../App";
import { removeTaskAC, addTaskAC, changeStatusAC, changeTitleAC } from "./tasks-reducer";

test('correct task should be deleted from correct array', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false } 
    ],
    todolistId2: [
      { id: '1', title: 'bread', isDone: },
      { id: '2', title: 'milk', isDone: },
      { id: '3', title: 'tea', isDone: }
    ]
  }

  const action = removeTaskAC('2', 'todolistId2');
  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'].length).toBe(3);
  expect(endState['todolistId2'].length).toBe(2);
  expect(endState['todolistId2'].every(t => t.id != '2')).toBeTruthy();
  // expect(endState['todolistId1'][0].id).toBe('1');
  // expect(endState['todolistId1'][1].id).toBe('2');
})

test('correct task should be added to correct array', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false }
    ],
    'todolistId2': [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: false },
      { id: '3', title: 'tea', isDone: false }
    ]
  }

  const action = addTaskAC('juce', 'todolistId2');
  const endState = tasksReducer(startState, action);

  expect(endState['todolistId1'].length).toBe(3);
  expect(endState['todolistId2'].length).toBe(4);
  expect(endState['todolistId2'][0].id).toBeDefined();
  expect(endState['todolistId2'].id[0].title).toBe('juce');
  expect(endState['todolistId2'].id[0].isDone).toBe(false);
})

test('status of specified task should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false }
    ],
    'todolistId2': [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false }
    ]
  }

  const action = changeStatusAC('2', true, 'todolistId2');
  const endState = tasksReducer(startState, action);

  expect(endState['todolistId2'][1].isDone).toBeTruthy;
  expect(endState['todolistId1'][1].isDone).toBeFalsy;
})

test('title of specified task should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false }
    ],
    'todolistId2': [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false }
    ]
  }

  const action = changeTitleAC('2', 'MilckyWay', 'todolistId2');
  const endState = tasksReducer(startState, action);

  expect(endState['todolistId2'][1].title).toBe('MilckyWay');
  expect(endState['todolistId1'][1].title).toBe('JS');
})