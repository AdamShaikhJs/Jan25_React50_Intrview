import React, { useState } from 'react';

function TodoChek() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  console.log(tasks)

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main>
      <h6>To-Do App</h6>
      <div className="task-input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div >
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`todo-item ${task.completed ? 'completed' : ''}`}
            >
              <span
                className="checkmark"
                onClick={() => handleToggleTask(task.id)}
              >
                {task.completed ? '✔' : '⬜'}
              </span>
              <span className="task-text">{task.text}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks yet. Add a task to get started!</p>
        )}
      </div>
    </main>
  );
}

export default TodoChek;
