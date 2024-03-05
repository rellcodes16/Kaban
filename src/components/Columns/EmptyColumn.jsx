import { useBoards } from "../../context/BoardsContext";
import ButtonTemplate from "../../ui/ButtonTemplate";

function EmptyColumn() {
    const { activeBoard } = useBoards()

    console.log('activeBoard',activeBoard)

    console.log(activeBoard)
  return (
    <main>
        <div className="text-gray-500">
          <p>The board is empty. Create a new column to get started.</p>
          <div>
            <ButtonTemplate type='primary'>+Add New Column</ButtonTemplate>
          </div>
        </div>
    </main>
  )
}

export default EmptyColumn