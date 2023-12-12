import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [editingTaskId, setEditingTaskId] = useState(null);

  function handleAddTask(newTask) {
    setTaskList([...taskList, { id: nextId, text: newTask }]);
    setNextId((prevId) => prevId + 1);
  }

  function handleDeleteTask(taskId) {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function handleEditTask(taskId, newTask) {
    if (newTask) {
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) =>
          task.id === taskId ? { ...task, text: newTask } : task
        )
      );
    } else {
      setEditingTaskId(taskId);
    }
  }

  return (
    <>
      <h1>Todos List</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList
        taskList={taskList}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </>
  );
}

export default App;
