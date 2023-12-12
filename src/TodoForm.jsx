import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    onAddTask(newTask);
    setNewTask("");
  }

  return (
    <>
      <input
        type="text"
        value={newTask}
        placeholder="Add Task"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}

export default TodoForm;
