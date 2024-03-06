import { HiPencil, HiTrash } from "react-icons/hi2"
import { List, Menu, Toggle, Button } from "./Menu"
import Modal from "./Modal"
import { useBoards } from "../context/BoardsContext"
import AddNewTask from "../components/Tasks/AddNewTask"
import ConfirmDeletion from "./ConfirmDeletion"
import { useDispatch } from "react-redux"
import { deleteBoard } from "../features/dataSlice"
import EditBoardForm from "../components/Boards/EditBoardForm"

function Header({ onCloseModal }) {
    const { activeBoard, setActiveBoard } = useBoards()
    const dispatch = useDispatch()

    console.log(activeBoard)

    console.log(activeBoard?.name)

    const handleDeleteBoard = () => {
        if (activeBoard && activeBoard?.name) {
            dispatch(deleteBoard(activeBoard));
        }
        onCloseModal();
        setActiveBoard(null)
        console.log(activeBoard)
    };
    
  return (
    <div className="h-[80px] w-full px-4 flex justify-between items-center dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-600 border-solid">
        <h1 className="text-2xl font-bold dark:text-gray-400 text-black">{activeBoard?.name}</h1>
        <div className="flex gap-2">
            <AddNewTask />
            <Modal>
                <div className="flex items-center justify-end">
                    <Menu>
                        <Toggle id='taskId'/>
                        <List id='taskId'>
                            <Modal.Open openModalName='edit'>
                                <Button icon={<HiPencil />}>Edit Board</Button>
                            </Modal.Open>
                            <Modal.Open openModalName='delete'>
                                <Button icon={<HiTrash />} type='danger-menu'>Delete Board</Button>
                            </Modal.Open>
                        </List>
                    </Menu>
                    <Modal.Window name='edit'>
                        <EditBoardForm board={activeBoard}/>
                    </Modal.Window>
                    <Modal.Window name='delete'>
                        <ConfirmDeletion itemName={activeBoard?.name} onConfirm={handleDeleteBoard}/>
                    </Modal.Window>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header