import React, { useState } from 'react';
import { TextField } from '@mui/material';

type EditableSpanPropsType = {
  title: string;
  editMode: boolean;
  onChange: (newValue: string) => void;
}

export function EditableSpan(props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState('');

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  }

  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  }

  function onChangeTitleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  return editMode
    ? <TextField 
      value={title} 
      variant={'standard'}
      onChange={onChangeTitleHandler} 
      onBlur={activateViewMode} 
      autoFocus />
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
}