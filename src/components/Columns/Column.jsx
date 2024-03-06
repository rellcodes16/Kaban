import { FaCircle } from "react-icons/fa";
import Task from "../Tasks/Task";

const Column = ({ column }) => {
  console.log(column)

  console.log(column.name)
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <FaCircle className={`mt-1 ${column.name !== 'Todo' && column.name !== 'Doing' && column.name !== 'Done' && 'text-indigo-600'} ${column.name === 'Todo' && 'text-blue-400'} ${column.name === 'Doing' && 'text-indigo-600'} ${column.name === 'Done' && 'text-green-300'}`}/>
        </div>
        <div className="min-w-[80px] text-gray-600">
          {column.name} ( {column.tasks ? column.tasks.length : 0} )
        </div>
      </div>
      {column.tasks && column.tasks.length === 0 ? (
        <div
          className="border-dashed border-[2px] border-gray-600 p-5 min-h-[300px] min-w-[200px] flex items-center justify-center mt-4"
        >
          
        </div>
      ) : (
        column.tasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })
      )}
    </div>
  );
};


export default Column;