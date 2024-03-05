import { HiPencil, HiTrash } from "react-icons/hi2"
import { List, Menu, Toggle, Button } from "./Menu"
import Modal from "./Modal"
import { useBoards } from "../context/BoardsContext"
import AddNewTask from "../components/Tasks/AddNewTask"

function Header() {
    const { activeBoard } = useBoards()

    console.log(activeBoard)
  return (
    <div className="h-[80px] w-full px-4 flex justify-between items-center bg-gray-800 border border-gray-600 border-solid">
        <h1 className="text-2xl font-bold text-gray-400">{activeBoard?.name}</h1>
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
                    </Modal.Window>
                    <Modal.Window name='delete'>
                    </Modal.Window>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header