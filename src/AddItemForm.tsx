import React, { useState } from 'react';
import { Button } from '@mui/material';

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
    <input
      type="text"
      value={title}
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
      className={error ? 'error' : ''}
    />
    <Button onClick={addTask} variant={'contained'} color={'primary'}>+</Button>
    {error && <div className='error-message'>{error}</div>}
  </div>
}