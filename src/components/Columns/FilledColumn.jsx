import { useBoards } from "../../context/BoardsContext";
import Column from "./Column";

function FilledColumn() {
    const { activeBoard } = useBoards()

    console.log('activeBoard',activeBoard)

    console.log(activeBoard)
  return (
    <main className="flex gap-16">
        {activeBoard?.columns?.map((column, index) =>  <Column key={index} column={column} />)}
    </main>
  )
}

export default FilledColumn