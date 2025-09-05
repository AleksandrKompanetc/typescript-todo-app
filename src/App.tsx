import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};
 
const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false}, 
  { id: 2, name: 'task 2', description: 'description 2', checked: false},
  { id: 3, name: 'task 3', description: 'description 3', checked: false},
]

export const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, ])
  }

  return (
    <div className="app-container">
      <div className='app'>
        <Header todoCount={todos.length} />
        <TodoPanel onAddTodo={() => { /* TODO: implement add todo logic */ }} />
      </div>
    </div>
  );
}

export default App;
