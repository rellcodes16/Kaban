import { useBoards } from "../../context/BoardsContext";
import Column from "./Column";

function FilledColumn() {
    const { activeBoard } = useBoards()

    console.log('activeBoard',activeBoard)

    console.log(activeBoard)
  return (
    <main className="flex gap-16 mb-10">
        {activeBoard?.columns?.map((column, index) =>  <Column key={index} column={column} />)}

       {activeBoard.columns.length > 0 && ( <button className="min-w-[300px] mr-4 h-full flex flex-col mt-10 items-center justify-center text-gray-400 text-2xl rounded-lg bg-white dark:bg-black dark:opacity-10">
          +New Column
        </button>)}
    </main>
  )
}

export default FilledColumn