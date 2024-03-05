import { getColumnsData } from "../../services/ApiColumns";
import { useData } from "../../services/DataContext";
import { useColInfo } from "./useColInfo"

function BoardsItem({ board }) {
    const { setData } = useData()
    console.log('board', board)
    
    const { name, id } = board

    const handleClick = async () => {
      try {
          const data = await getColumnsData(id); // Pass the board ID to fetch columns
          console.log('column data', data);
          setData(data)
      } catch (error) {
          console.error('Error fetching columns data:', error);
      }
  };


  return (
    <li className="text-gray-400 text-xl flex gap-3 p-2 mt-3" onClick={handleClick}>
      <div className="self-center">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>
      </div>
        <h2 className="capitalize self-center cursor-pointer">{name}</h2>
    </li>
  )
}

export default BoardsItem
