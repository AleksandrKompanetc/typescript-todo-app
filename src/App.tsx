import React from 'react';
import './App.css';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false}, 
  { id: 2, name: 'task 2', description: 'description 2', checked: false},
  { id: 3, name: 'task 3', description: 'description 3', checked: false},
]

export const App = () => {
  return (
    <div className="app-container">
      <div className='app'>todo</div>
    </div>
  );
}

export default App;
