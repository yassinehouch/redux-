// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';




const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'DONE') {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filter === 'NOT_DONE') {
      return state.tasks.filter((task) => !task.isDone);
    }
    return state.tasks;
  });

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;

