import React, { useState } from 'react';

type EditableSpanPropsType = {
  title: string;
  editMode: boolean;
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
  }

  function onChangeTitleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  return editMode
    ? <input 
      value={title} 
      onChange={onChangeTitleHandler} 
      onBlur={activateViewMode} 
      autoFocus />
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
}