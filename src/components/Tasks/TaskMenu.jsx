import React from 'react';
import { HiPencil, HiTrash } from "react-icons/hi";
import { Button, List, Menu, Toggle } from "../../ui/Menu";
import Modal from "../../ui/Modal";
import EditTaskForm from "./EditTaskForm";
import ConfirmDeletion from "../../ui/ConfirmDeletion";
import { useBoards } from "../../context/BoardsContext";
import { useDispatch } from "react-redux";
import { editBoard } from '../../features/dataSlice';

function TaskMenu({ closeModal, activeTask }) {
  const { activeBoard, setActiveBoard } = useBoards();
  const dispatch = useDispatch();

  
  const handleDeleteTask = () => {
    const activeColumn = activeBoard.columns.find((col) => col.name === activeTask.status);
    if (!activeColumn) return;

    const updatedTasks = activeColumn.tasks.filter((task) => task.title !== activeTask.title);
    const updatedColumn = { ...activeColumn, tasks: updatedTasks };
    const updatedColumns = activeBoard.columns.map((column) => {
      return column.name !== activeColumn.name ? column : updatedColumn;
    });

    const updatedBoard = { ...activeBoard, columns: updatedColumns };
    setActiveBoard(updatedBoard);
    dispatch(editBoard({ updatedBoard, activeBoard }));
  };

  return (
    <div>
      <Modal>
        <div className="flex items-center justify-end">
          <Menu>
            <Toggle id='taskId' />
            <List id='taskId'>
              <Modal.Open openModalName='edit'>
                <Button icon={<HiPencil />}>Edit Task</Button>
              </Modal.Open>
              <Modal.Open openModalName='delete'>
                <Button icon={<HiTrash />} type='danger-menu' onClick={handleDeleteTask}>Delete Task</Button>
              </Modal.Open>
            </List>
          </Menu>
          <Modal.Window name='edit'>
            <EditTaskForm task={activeTask}/>
          </Modal.Window>
          <Modal.Window name='delete'>
            <ConfirmDeletion itemName={activeBoard?.name} onConfirm={handleDeleteTask}/>
          </Modal.Window>
        </div>
      </Modal>
    </div>
  );
}

export default TaskMenu;
