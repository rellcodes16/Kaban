import { useEffect } from "react";
import { useBoards } from "../../context/BoardsContext";
import { useDarkMode } from "../../context/ColorModeToggle";

function BoardsItem({ board }) {
  const { activeBoard, setActiveBoard } = useBoards();
  const { isDarkMode } = useDarkMode();

  console.log('board', board)

  useEffect(() => {
    if (!activeBoard && board && board.length > 0) {
      setActiveBoard(board[0]);
    }
  }, [board, activeBoard, setActiveBoard]);

  const handleActiveLink = () => {
    setActiveBoard(board);
  };

  return (
    <div className={`flex dark:text-gray-400 text-gray-500 gap-3 mt-5 text-xl cursor-pointer py-3 pr-5 pl-12 ml-[-45px] ${activeBoard && activeBoard === board ? 'bg-indigo-600 rounded-r-full text-white' : ''}` }onClick={handleActiveLink}>
      <div className="h-full mt-1">
        <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill='#828FA3' />
        </svg>
      </div>
      <h2>{board?.name}</h2>
    </div>
  );
}

export default BoardsItem;
