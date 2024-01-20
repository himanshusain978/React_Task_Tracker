// TaskItem.js
import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";
const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`flex border-2 border-orange-500 rounded-lg m-2 p-1 gap-2 bg-gray-600 justify-between ${task.completed ? ' bg-slate-900' : ''}`}>
        <div className={`flex flex-col  `}>
            <h3 className=' text-red-400 text-2xl' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
            </h3>
            <p>Added on: {task.dateAdded}</p>
        </div>
        <div className='flex justify-center items-center'>
            <button className=' border-2 rounded-md border-slate-800 px-2 py-1 mr-2' onClick={() => onDelete(task.id) }> <MdDeleteForever className=' text-red-600'/></button>
            <button className=' border-2 rounded-md border-slate-800 px-2 py-1 ' onClick={() => onToggle(task.id)}> 
                {
                    task.completed ? <HiXMark className=' text-red-800'/> :<FcCheckmark />
                }
            </button>
        </div>
    </div>
  );
};

export default TaskItem;
