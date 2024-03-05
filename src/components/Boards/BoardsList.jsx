import { useSelector } from "react-redux";
import BoardsItem from "./BoardsItem";
import AddBoards from "./AddBoards";
import { useBoards } from "../../context/BoardsContext";
import { useEffect } from "react";

function BoardsList() {
  const { activeBoard, setActiveBoard } = useBoards()
  const { loading, boards, error } = useSelector(state => state.data)

  console.log(boards[0])

  
  useEffect(() => {
    if (boards && boards.length > 0 && !activeBoard) {
      setActiveBoard(boards[0]);
    }
  }, [boards, activeBoard, setActiveBoard]);

  return (
    <div>
        {boards.map(board => <BoardsItem board={board} key={board.id}/> )}

        <AddBoards />
    </div>
  )
}

export default BoardsList;
