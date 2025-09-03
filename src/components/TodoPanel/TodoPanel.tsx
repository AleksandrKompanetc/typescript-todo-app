import React, { useState } from 'react';
import styles from './TodoPanel.module.css';

interface TodoPanelProps {
  onAddTodo: () => void;
}

const DEFAULT_TODO = {
  name: '',
  description: ''
}

export const TodoPanel: React.FC<TodoPanelProps> = () => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  }

  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.fields_container}>
        <div className={styles.field_container}>
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
    </div>
  )
}