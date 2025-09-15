import React from 'react';

export default function App() {
  return (
    <div className='App'>
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  )
}

function TodoList() {
  return (
    <div>
      <h3>What to learn?</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={true} /><span>HTML&CSS</span></li>
        <li><input type="checkbox" checked={true} /><span>JS</span></li>
        <li><input type="checkbox" checked={false} /><span>React</span></li>
      </ul>
    </div>
  )
}