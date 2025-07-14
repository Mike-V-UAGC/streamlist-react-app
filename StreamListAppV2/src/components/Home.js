
import React, { useState } from "react";
import { MdEdit, MdDelete, MdCheckCircle } from "react-icons/md";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updated = tasks.map((task, index) =>
        index === editIndex ? { ...task, text: input } : task
      );
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const handleEdit = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  return (
    <div className="home-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Submit</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="icons">
              <MdEdit onClick={() => handleEdit(index)} />
              <MdCheckCircle onClick={() => handleComplete(index)} />
              <MdDelete onClick={() => handleDelete(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
