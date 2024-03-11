import { useSelector } from "react-redux";
import BoardsItem from "./BoardsItem";
import AddBoards from "./AddBoards";
import { useBoards } from "../../context/BoardsContext";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Spinner from '../../ui/Spinner'

function BoardsList() {
  const { activeBoard, setActiveBoard } = useBoards()
  const { loading, boards, error } = useSelector(state => state.data)
  const [storedBoards, setStoredBoards] = useLocalStorage([], 'boards');

  useEffect(() => {
    if (boards.length > 0) {
      setStoredBoards(boards); 
    } else if (storedBoards.length > 0 && !activeBoard) {
      setActiveBoard(storedBoards[0]); 
    }
  }, [boards, storedBoards, setActiveBoard, setStoredBoards, activeBoard]);

  if(loading) return <Spinner />


  return (
    <div>
        {(boards.length > 0 ? boards : storedBoards).map(board => <BoardsItem board={board} key={board?.id}/> )}

        <AddBoards />
    </div>
  )
}

export default BoardsList;
