import React from 'react';
import './App.css';

const DEFAULT_TODO_LIST = [
  { id: 1, name: '', description: '', checked: false}, 
  { id: 1, name: '', description: '', checked: false},
  { id: 1, name: '', description: '', checked: false},
]

export const App = () => {
  return (
    <div className="app-container">
      <div className='app'>todo</div>
    </div>
  );
}

export default App;
