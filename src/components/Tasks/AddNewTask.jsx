import ButtonTemplate from "../../ui/ButtonTemplate"
import Modal from "../../ui/Modal"
import TaskForm from "./TaskForm"

function AddNewTask() {
  return (
    <div>
      <Modal>
        <Modal.Open openModalName='task-name'>
            <ButtonTemplate type='primary'>+Add New Task</ButtonTemplate>
        </Modal.Open>
        <Modal.Window name='task-name'>
            <TaskForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default AddNewTask