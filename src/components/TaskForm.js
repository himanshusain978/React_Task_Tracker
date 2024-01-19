// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName.trim() !== '') {
      onAdd({ name: taskName, dateAdded: new Date().toLocaleString() });
      setTaskName('');
    }
  };

  return (
    <div className='flex justify-center items-center'>
            <input type="text" id="task" class="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
             block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder="Enter task name" required value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            
            <label for="task" class="block mb-2 text-sm font-medium text-gray-900 
            dark:text-white"><button className='m-2' onClick={handleAdd}>Add Task</button></label>
    </div>
  );
};

export default TaskForm;
