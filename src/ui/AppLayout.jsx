import Header from "./Header"
import Sidebar from "./SideBar"
import MainPage from "./MainPage"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchBoards } from "../features/dataSlice"


const AppLayout = () => {
  const dispatch = useDispatch()
  const { loading, boards, error } = useSelector(state => state.data)


  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  console.log(boards)
  return (
    <div className="grid h-screen grid-layout overflow-hidden">
        <Sidebar />
        <Header />

        <main className={`overflow-auto bg-gray-900 col-end-[-1] sm:py-10 sm:px-10 md:px-10 md:py-10 `}>
            <div className="max-w-[120rem] my-0 mx-[auto] py-5 h-full flex flex-col bg-gray-900">
               <MainPage /> 
            </div>
        </main>
    </div>
  )
}

export default AppLayout
