import React from 'react';

export const TodoItem = ({ todo }) => {
  console.log('@', todo)
  return (
    <div>{todo.name}</div>
  )
}