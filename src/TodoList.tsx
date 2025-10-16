import React, { useCallback } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import CheckBox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './state/store';
import { TasksStateType } from './AppWithReducers';
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './state/tasks-reducer';

// function sum(a: number, b: number) {
//   return a + b;
// }

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  addTask: (title: string, todolistId: string) => void;
  // removeTask: (id: string, todolistId: string) => void;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  // changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  // changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void;
  removeTodolist: (todolistId: string) => void;
  changeTodolistTitle: (id: string, newTitle: string) => void;
  filter: FilterValuesType;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

export const TodoList = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const tasks = useSelector<AppRootState, Array<TaskType>>(state => state.tasks[props.id]);

  // function changeFilter(value: FilterValuesType, todolistId: string) {
  //   const action = changeTodolistFilterAC(value, todolistId);
  //   dispatch(action);
  // }

  const addTask = useCallback((title: string) => {
    props.addTask(title, props.id);
  }, [props.addTask, props.id]);

  const removeTodolist = () => props.removeTodolist(props.id);

  const changeTodolistTitle = useCallback((newTitle: string) => {
    props.changeTodolistTitle(newTitle, props.id);
  }, [props.changeTodolistTitle, props.id]);

  const onAllClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id]);
  const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id]);
  const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id]);

  let tasksForTodolists = props.tasks;

  if (props.filter === 'active') {
    tasksForTodolists = props.tasks.filter(t => t.isDone === false);
  }
  if (props.filter === 'completed') {
    tasksForTodolists = props.tasks.filter(t => t.isDone === true);
  }

  return (
    <div>
      <h3>
        <EditableSpan title={props.title} onChange={changeTodolistTitle} editMode={true} />
        <IconButton onClick={removeTodolist}>
          <DeleteIcon />
        </IconButton>
      </h3>
      <AddItemForm
        addItem={(title) => dispatch(addTaskAC(title, props.id))}
      />
      <div>
        {
          (() => {
            let tasksForTodolists = tasks;
            if (props.filter === 'active') {
              tasksForTodolists = tasksForTodolists.filter(t => t.isDone === false);
            }
            if (props.filter === 'completed') {
              tasksForTodolists = tasksForTodolists.filter(t => t.isDone === true);
            }
            return tasksForTodolists.map(task => {
              const onClickHandler = () => dispatch(removeTaskAC(task.id, props.id));
              const onChangeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                let newIsDoneValue = e.currentTarget.checked;
                dispatch(changeTaskStatusAC(task.id, newIsDoneValue, props.id));
              };
              const onChangeTitleHandler = (newValue: string) => {
                dispatch(changeTaskTitleAC(task.id, newValue, props.id));
              };
              return (
                <div key={task.id} className={task.isDone ? 'is-done' : ''}>
                  <CheckBox
                    checked={task.isDone}
                    onChange={onChangeStatusHandler}
                  />
                  <EditableSpan
                    title={task.title}
                    onChange={onChangeTitleHandler}
                    editMode={true}
                  />
                  <IconButton onClick={onClickHandler}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            });
          })()
        }
      </div>
      <div>
        <Button variant={props.filter === 'all' ? 'outlined' : 'text'} onClick={onAllClickHandler}>All</Button>
        <Button color={'primary'} variant={props.filter === 'active' ? 'contained' : 'text'} onClick={onActiveClickHandler}>Active</Button>
        <Button color={'secondary'} variant={props.filter === 'completed' ? 'contained' : 'text'} onClick={onCompletedClickHandler}>Completed</Button>
      </div>
    </div >
  )
})