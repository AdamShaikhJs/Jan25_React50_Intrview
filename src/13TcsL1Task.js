// import "./styles.css";
import React, { useState } from "react";

const initialTasks = [
  {
    id: 1,
    taskName: "task1",
    statusTask: "not started",
  },
  {
    id: 2,
    taskName: "task2",
    statusTask: "completed",
  },
];

export default function TcsL1Task() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleChange = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              statusTask:
                task.statusTask === "completed" ? "not started" : "completed",
            }
          : task
      )
    );
  };

  return (
    <main>
      <h1 className="title">Hi there!</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.statusTask === "completed"}
            onChange={() => handleChange(task.id)}
          />
          <span>{task.taskName}</span>
          <span>{task.statusTask}</span>
        </div>
      ))}
    </main>
  );
}
