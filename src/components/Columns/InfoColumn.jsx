import { useBoards } from "../../context/BoardsContext"

function InfoColumn() {
    const { activeBoard } = useBoards()
  return (
    <main>
         {activeBoard && (
        <div
        //   onClick={() => setNewColumnToggle(!newColumnToggle)}
        >
          <div>+ New Column</div>
        </div>
      )}
    </main>
  )
}

export default InfoColumn