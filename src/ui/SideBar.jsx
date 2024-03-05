import BoardsList from "../components/Boards/BoardsList"
import Logo from "./Logo"

function SideBar() {
  return (
    <aside className="pt-8 row-span-full sm:max-w-[300px] flex items-center flex-col bg-gray-800 border-r border-gray-600 border-solid overflow-auto">
        <Logo />
        <h1 className="uppercase text-gray-300 mt-10">all board(s)</h1>

        <BoardsList/>
    </aside>
  )
}

export default SideBar