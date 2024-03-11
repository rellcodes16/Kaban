import { createContext, useContext, useState } from "react";

const CheckContext = createContext();

const CheckProvider = ({children}) => {  
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const handleCheck = (name) => {
    if (checkedCheckboxes.includes(name)) {
        console.log(name)
      setCheckedCheckboxes(checkedCheckboxes.filter(item => item !== name));
    } else {
      setCheckedCheckboxes([...checkedCheckboxes, name]);
    }
  };

  console.log('hey')

  return (
    <CheckContext.Provider value={{
         checkedCheckboxes,
         handleCheck
    }}
    >
      {children}
    </CheckContext.Provider>
  );
};

function useCheck(){
    const context = useContext(CheckContext);

    if(context === undefined)
        throw new Error ('CheckContext was used outside of CheckProvider');

    return context;
}

export { CheckProvider, useCheck };
