import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
  });

  const addTask = (newTask) =>
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);

  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

  const toggleCompletion = (taskId) =>
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );

  useEffect(() => {
    // Update local storage when tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className=' bg-gray-400 flex justify-center items-center text-slate-400 min-h-screen'>
      <div className='flex flex-col border-4 p-2 rounded-xl border-indigo-700 bg-slate-800 '>
        <h1 className='flex justify-center items-center text-red-900 text-3xl p-2'>Task Tracker</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
      </div>
    </div>
  );
};

export default App;
