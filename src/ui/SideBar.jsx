import BoardsList from "../components/Boards/BoardsList"
import Logo from "./Logo"
import ModeToggle from "./ModeToggle"

function SideBar() {
  return (
    <aside className="pt-8 row-span-full sm:max-w-[300px] flex items-center justify-between flex-col bg-white dark:bg-gray-800 border-r border-gray-600 border-solid overflow-auto">
        <div>
          <Logo />
          <h1 className="uppercase dark:text-gray-300 text-gray-400 mt-10 text-center">all board(s)</h1>

          <BoardsList/>
        </div>

        <div className="mb-10">
          <ModeToggle />
        </div>
    </aside>
  )
}

export default SideBar