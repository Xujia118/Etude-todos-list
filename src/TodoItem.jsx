import React, { useState } from "react";

function TodoItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task.text);

  function handleSaveEdit() {
    onEdit(task.id, editedTaskText);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskText}
            onChange={(event) => setEditedTaskText(event.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
