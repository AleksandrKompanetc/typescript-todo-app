import React, { useState } from 'react';
import styles from './TodoPanel.module.css';

const DEFAULT_TODO = {
  name: '',
  description: ''
}

export const TodoPanel = () => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setTodo({...todo, [name]: value });
}

  return (
    <div className={styles.todopanel_container}>
      <div>
        <label htmlFor="Name">
          <div>Name</div>
          <input 
            type="text" 
            id='name' 
            value={todo.name} 
            name='name' 
            onChange={onChange} 
          />
        </label>
      </div>
      <div>
        <label htmlFor="Description">
          <div>Description</div>
          <input 
            type="text" 
            id='description' 
            value={todo.description} 
            name='description' 
            onChange={onChange} 
          />
        </label>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </div>
  )
}