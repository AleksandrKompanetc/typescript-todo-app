import React from 'react';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.name}</div>
      ))}
    </div>
  )
}