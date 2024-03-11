import { createContext, useContext, useState } from "react";

const ColumnContext = createContext()

const BoardsProvider = ({children}) => {  
  const [activeBoard, setActiveBoard] = useState(null);

  return (
    <ColumnContext.Provider value={{
        activeBoard, 
        setActiveBoard 
        }}
    >
      {children}
    </ColumnContext.Provider>
  )
}

function useColumn(){
    const context = useContext(ColumnContext)

    if(context === undefined)
        throw new Error ('ColumnContext was used outside of ColumnProvider')

    return context
}

export { BoardsProvider, useColumn }

