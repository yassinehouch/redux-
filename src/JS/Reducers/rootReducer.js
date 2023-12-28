const initialState = {
    tasks: [],
    filter: 'ALL',
  };
  
  export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload,
        };
      case 'EDIT_TASK':
        const editedTasks = state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description, isDone: action.payload.isDone }
            : task
        );
        return {
          ...state,
          tasks: editedTasks,
        };
      default:
        return state;
    }
  };
  