import { createContext, useContext, useState } from "react";

const BoardsContext = createContext()

const BoardsProvider = ({children}) => {  
  const [activeBoard, setActiveBoard] = useState(null);

  return (
    <BoardsContext.Provider value={{
        activeBoard, 
        setActiveBoard 
        }}
    >
      {children}
    </BoardsContext.Provider>
  )
}

function useBoards(){
    const context = useContext(BoardsContext)

    if(context === undefined)
        throw new Error ('BoardsContext was used outside of BoardsProvider')

    return context
}

export { BoardsProvider, useBoards }

