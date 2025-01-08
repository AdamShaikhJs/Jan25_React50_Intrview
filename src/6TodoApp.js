import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  // Initialize state with data from localStorage or an empty array
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [todoText, setTodoText] = useState('');
  const [editingId, setEditingId] = useState(null);
  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);


  const handleSubmit = () => {
    if (todoText.trim()) {
      if (editingId) {
        setTodos(todos.map(todo =>
          todo.id === editingId ? { ...todo, text: todoText } : todo
        ));
        setEditingId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: todoText }]);
      }
      setTodoText(''); // Clear input field
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Remove todo by ID
  };

  return (
    <div className="accordion">
      <h3 className="accordion-heading">Todo App</h3>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editingId ? 'Save Edit' : 'Add Todo'}
      </button>

      {/* Todo List */}
      <ul>
        {todos.map(({id,text}) => (
          <li key={id}>
            {text}
            <button onClick={() => setEditingId(id) || setTodoText(text)} className='mx'>🖋️ Edit</button>
            <button onClick={() => deleteTodo(id)}>🪣Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
