import React from "react"
import './App.css';

import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
function App() {
  return (
    <div className="App">
    <ToDoList />
    <ToDoForm />
    </div>
  );
}

export default App;

