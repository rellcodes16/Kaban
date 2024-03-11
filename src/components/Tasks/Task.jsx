import { useState } from "react";
import TaskModal from "./TaskModal";
import { useCheck } from "../../context/CheckContext";

function Task({task}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subtask = task.subtasks.map(subtask => subtask.isCompleted)

  console.log(subtask)
  const subtaskLength = subtask.length
  const { checkedCheckboxes, handleCheck } = useCheck();

  // const isCompleted = subtask.filter(completedSubtask => completedSubtask === true)
  const isCompletedLength = checkedCheckboxes.length

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className={`dark:bg-gray-800 bg-white text-gray-600 dark:text-gray-400 rounded-lg p-5 min-h-[70px] mt-5 min-w-[300px] mr-2 cursor-pointer `}>
        <h2>{task.title}</h2>
        <p className="text-gray-700">{isCompletedLength} of {subtaskLength} Subtask(s)</p>
      </div>
      {isModalOpen && (<TaskModal closeModal={closeModal} task={task} isModalOpen={isModalOpen}/>)}
    </>

  )
}

export default Task