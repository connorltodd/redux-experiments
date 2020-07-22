import React from 'react';
import './App.css';
import Counter from './components/Counter.js';
import TodoList from './components/Todolist';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <TodoList />
      <Users />
    </div>
  );
}

export default App;
