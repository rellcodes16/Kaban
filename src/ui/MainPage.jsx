import EmptyColumn from "../components/Columns/EmptyColumn"
import FilledColumn from "../components/Columns/FilledColumn"
import { useBoards } from "../context/BoardsContext"

function MainPage() {
  const { activeBoard } = useBoards()

  return (
    <div className={`flex gap-10 text-gray-300 font-3xl font-bold ${!activeBoard || activeBoard?.columns === undefined && 'flex-col items-center justify-center'}`}>
      {activeBoard && <FilledColumn />}
      {!activeBoard || activeBoard?.columns === undefined || activeBoard.columns.length === 0 && <EmptyColumn />}
      {/* <InfoColumn /> */}
    </div>
  )
}

export default MainPage
