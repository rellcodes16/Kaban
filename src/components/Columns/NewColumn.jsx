import { useBoards } from "../../context/BoardsContext"
import ButtonTemplate from "../../ui/ButtonTemplate"
import Modal from "../../ui/Modal"
import EditBoardForm from "../Boards/EditBoardForm"

function NewColumn() {
    const { activeBoard } = useBoards()
  return (
    <div>
      <Modal>
        <Modal.Open openModalName='column-name'>
            {activeBoard.columns.length > 0 && ( <button className="min-w-[300px] mr-4 h-full flex flex-col mt-10 items-center justify-center text-gray-400 text-2xl rounded-lg bg-white dark:bg-black dark:opacity-10">
                +New Column
            </button>)}
            {/* {activeBoard.columns.length === 0 && (<ButtonTemplate type='primary'>+Add New Column</ButtonTemplate>)} */}
        </Modal.Open>
        <Modal.Window name='column-name'>
            <EditBoardForm board={activeBoard} disableName={true}/>
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default NewColumn