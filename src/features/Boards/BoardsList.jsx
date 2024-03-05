import Spinner from "../../ui/Spinner"
import AddBoard from "./AddBoard"
import BoardsItem from "./BoardsItem"
import { useBoards } from "./useBoards"

function BoardsList() {
  const { boards, isLoading } = useBoards()

  if(isLoading) return <Spinner />

  console.log(boards)
  return (
    <div>
      <ul className="mt-3">
        {boards.map(board => <BoardsItem board={board} key={board.id}/>)}
      </ul>
      <AddBoard />
    </div>
  )
}

export default BoardsList
