import React from 'react';
import './App.css';
import Counter from './components/Counter.js';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
