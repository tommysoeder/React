import React, { useState } from 'react';

const TodoList = () => {
 
  const [todos, setTodos] = useState([]);

  const [todoInput, setTodoInput] = useState('');

  const handleAddTodo = () => {
    
    setTodos([...todos, todoInput]);
   
    setTodoInput('');
  };

  const handleResetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
      <button onClick={handleAddTodo}>Add a ToDo</button>
      <button onClick={handleResetTodos}>Reset Todos</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
