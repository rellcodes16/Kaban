import { useBoards } from "../../context/BoardsContext";
import Column from "./Column";
import NewColumn from "./NewColumn";

function FilledColumn() {
    const { activeBoard } = useBoards()

    console.log('activeBoard',activeBoard)

    console.log(activeBoard)
  return (
    <main className="flex gap-16 mb-10">
        {activeBoard?.columns?.map((column, index) =>  <Column key={index} column={column} />)}

       <NewColumn />
    </main>
  )
}

export default FilledColumn