import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { ControlPoint } from '@mui/icons-material';

type AddItemFormPropsType = {addItem: (title: string) => void;
}

export function AddItemForm(props: AddItemFormPropsType) {
  let [title, setTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  }

  const addTask = () => {
    if (title.trim() !== '') {
      props.addItem(title.trim());
      setTitle('');
    } else {
      setError('Title is required');
    }
  }

  return <div>
    <TextField
      type="text"
      value={title}
      label={'Type value'}
      variant={'outlined'}
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
      error={!!error}
      helperText={error}
    />
    <IconButton onClick={addTask} color={'primary'}>
      <ControlPoint />
    </IconButton>
  </div>
}