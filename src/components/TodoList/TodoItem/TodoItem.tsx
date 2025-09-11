import React from 'react';
import styles from './TodoItem.module.css';
import { Button } from '../../Button/Button';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  console.log('@', todo)
  return (
    <div className={styles.todo_item_container}>
      <div>
        <div 
          aria-hidden 
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          className={styles.todo_item_title}>
          {todo.name}
        </div>
        <div aria-hidden className={styles.todo_item_description}>
          {todo.description}
        </div>
      </div>
      <div className={styles.todo_item_button_container}>
        <Button color='orange'>Edit</Button>
        <Button color='red'>Delete</Button>
      </div>
    </div>
  )
}