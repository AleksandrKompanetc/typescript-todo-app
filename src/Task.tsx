import React, { useCallback } from 'react';
import CheckBox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditableSpan } from './EditableSpan';
import { TaskType } from './TodoList';

export type TaskPropsType = {
  changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void;
  removeTask: (id: string, todolistId: string) => void;
  task: TaskType;
  todolistId: string;
}

export const Task = React.memo((props: TaskPropsType) => {
  const onClickHandler = () => props.removeTask(props.task.id, props.todolistId);
  const onChangeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked;
    props.changeTaskStatus(props.task.id, newIsDoneValue, props.todolistId);
  };
  const onChangeTitleHandler = useCallback((newValue: string) => {
    props.changeTaskTitle(props.task.id, newValue, props.todolistId);
  }, [props.changeTaskTitle, props.task.id, props.todolistId]);

  return (
    <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
      <CheckBox
        checked={props.task.isDone}
        onChange={onChangeStatusHandler}
      />
      <EditableSpan
        title={props.task.title}
        onChange={onChangeTitleHandler}
        editMode={true}
      />
      <IconButton onClick={onClickHandler}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
});