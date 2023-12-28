// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/Actions/action.js'; 




const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedIsDone, setEditedIsDone] = useState(task.isDone);

  const handleSaveTask = () => {
    dispatch(editTask(task.id, editedDescription, editedIsDone));
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="checkbox"
            checked={editedIsDone}
            onChange={(e) => setEditedIsDone(e.target.checked)}
          />
          <button onClick={handleSaveTask}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.description}</span>
          <input
            type="checkbox"
            checked={task.isDone}
            readOnly
          />
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
