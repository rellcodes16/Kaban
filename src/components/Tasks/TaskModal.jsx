import React, { useState } from "react";
import { useBoards } from "../../context/BoardsContext";
import Subtask from "../Subtasks/Subtask";
import TaskMenu from "./TaskMenu";
import { useCheck } from "../../context/CheckContext";
import { useDispatch } from "react-redux";
import { editBoard } from "../../features/dataSlice";

function TaskModal({ isModalOpen, closeModal, task }) {
  const { activeBoard, setActiveBoard } = useBoards();
  const [selectedColumnName, setSelectedColumnName] = useState(task.status);
  const { checkedCheckboxes, handleCheck } = useCheck();
  const dispatch = useDispatch();

  const updateTask = (newStatus) => {
    const updatedTask = {
      ...task,
      status: newStatus,
    };

    const updatedColumns = activeBoard.columns.map((column) => {
      if (column.name === newStatus) {
        const updatedTasks = column.tasks.map((t) =>
          t.title === updatedTask.title ? updatedTask : t
        );
        return { ...column, tasks: updatedTasks };
      }
      return column;
    });

    const updatedBoard = {
      ...activeBoard,
      columns: updatedColumns,
    };

    setActiveBoard(updatedBoard);
    dispatch(editBoard({ updatedBoard, activeBoard }));
    closeModal();
  };

  const subtaskLength = task.subtasks.length;
  const isCompletedLength = checkedCheckboxes.length;

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div
            className="absolute inset-0 bg-gray-900 opacity-75"
            onClick={closeModal}
          ></div>
          <div className="bg-white min-h-[200px] dark:bg-gray-800 py-5 px-10 rounded-lg z-30 max-w-[600px]">
            <div className="flex justify-between">
              <h2 className="text-2xl dark:text-gray-400 text-gray-600 font-bold mb-2 self-center">
                {task.title}
              </h2>
              <TaskMenu closeModal={closeModal} activeTask={task} />
            </div>
            <div className="py-3">
              <p className="dark:text-gray-400 text-gray-600 text-sm">
                {task.description}
              </p>
            </div>

            <h3 className="mb-2 dark:text-gray-400 text-gray-600">
              Subtasks ({isCompletedLength} of {subtaskLength})
            </h3>

            {task.subtasks.map((subtask, index) => (
              <Subtask
                subtask={subtask}
                key={index}
              />
            ))}

            <h3 className="mb-2 dark:text-gray-400 text-gray-600">
              Current Status
            </h3>

            <div className="flex items-center">
              <select
                value={selectedColumnName}
                onChange={(e) => updateTask(e.target.value)}
                id="status"
                className="border-solid border dark:bg-gray-800 dark:text-gray-400 text-gray-600 border-gray-400 rounded-sm px-2 py-1 mb-3 w-[100%]"
              >
                {activeBoard?.columns?.map((column, index) => (
                  <option key={index} value={column.name}>
                    {column.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskModal;
