import React from 'react';
import { useCheck } from "../../context/CheckContext";
import { useBoards } from '../../context/BoardsContext';

function Subtask({ subtask, index }) {
  const { checkedCheckboxes, handleCheck } = useCheck();

  console.log(checkedCheckboxes)

  const isChecked = checkedCheckboxes.includes(subtask.title);
  console.log(isChecked)

  const handleChange = () => {
    handleCheck(subtask.title); // Toggle the state of the checkbox at the given index
  };



  return (
    <div className="dark:bg-gray-900 bg-slate-200 p-2 rounded-lg flex mb-4 items-center">
      <input 
        type="checkbox" 
        name="subtask-checkbox" 
        checked={isChecked} 
        onChange={handleChange} 
        style={{ width: '16px', height: '16px' }} 
        className="mr-2"
      />
      <p className="text-gray-600 dark:text-gray-400">{subtask.title}</p>  
    </div>
  );
}

export default Subtask;
