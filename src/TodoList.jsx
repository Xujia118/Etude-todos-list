import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ taskList, onDelete, onEdit }) {
  return (
    <>
      {taskList.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default TodoList;
