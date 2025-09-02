import React, { useState } from 'react';
import styles from './TodoPanel.module.css';

export const TodoPanel = () => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  return (
    <div className={styles.todopanel_container}>
      <div>
        <label htmlFor="Name">
          <div>Name</div>
          <input type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="Description">
          <div>Description</div>
          <input type="text" />
        </label>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </div>
  )
}