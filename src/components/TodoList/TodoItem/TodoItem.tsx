import React from 'react';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  console.log('@', todo)
  return (
    <div>{todo.name}</div>
  )
}