import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { taskReducer } from './JS/Reducers/rootReducer.js'; // Provide the correct path
import AddTask from './components/AddTask';
import ListTask from './components/ListTask.js';

const store = createStore(taskReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;





