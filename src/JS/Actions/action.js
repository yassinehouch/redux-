export const addTasK = (description) => ({
    type: 'ADD_TASK',
    payload: {
      id: Math.random(), // You might want to use a more robust ID generation method
      description,
      isDone: false,
    },
  });
  
  export const filterTasks = (filterType) => ({
    type: 'FILTER_TASKS',
    payload: filterType,
  });
  
  export const editTask = (id, description, isDone) => ({
    type: 'EDIT_TASK',
    payload: { id, description, isDone },
  });
  