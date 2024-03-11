import { useBoards } from "../../context/BoardsContext";
import ButtonTemplate from "../../ui/ButtonTemplate";
import NewColumn from "./NewColumn";
import NewColumn2 from "./NewColumn2";

function EmptyColumn() {
    const { activeBoard } = useBoards()

    console.log('activeBoard',activeBoard)

    console.log(activeBoard)
  return (
    <main>
        <div className="text-gray-500 text-lg flex flex-col justify-center items-center">
          <p className="text-center">The board is empty. Create a new column to get started.</p>
          <div>
            <NewColumn2 />
          </div>
        </div>
    </main>
  )
}

export default EmptyColumn