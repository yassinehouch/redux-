import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTasK } from '../JS/Actions/action.js';

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTasK(newTask));
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;



  