import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editBoard } from '../../features/dataSlice';
import { HiXMark } from 'react-icons/hi2';
import FormRow from '../../ui/FormRow';
import { useBoards } from '../../context/BoardsContext';

function EditBoardForm({ onCloseModal, board, disableName, disableName2 }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { activeBoard, setActiveBoard } = useBoards();

  console.log(board?.name)
  console.log('name', activeBoard?.name)

  const [boardName, setBoardName] = useState(board.name);
  const [columns, setColumns] = useState(board?.columns);


  useEffect(() => {
    register("board_name");
  }, [register]);

  const handleColumnChange = (e, index) => {
    const { value } = e.target;
    const updatedColumns = [...columns];
    updatedColumns[index] = { ...updatedColumns[index], name: value };
    setColumns(updatedColumns);
  };

  const handleEditBoard = () => {
    const updatedColsWithDefaultTasks = columns.map(column => {
      return { ...column, tasks: column.tasks ? column.tasks : [] };
    });
    const updatedBoard = { ...board, name: boardName, columns: updatedColsWithDefaultTasks };
    dispatch(editBoard(updatedBoard, activeBoard.name));
    setActiveBoard(updatedBoard)
    console.log(updatedBoard)
    console.log('active board', activeBoard.name)
    onCloseModal();
  };

  return (
    <form className='min-w-[400px]' onSubmit={handleSubmit(handleEditBoard)}>
      <h1 className="text-2xl font-bold mb-4 dark:text-white text-black">Edit Board</h1>
      <FormRow label="Board Name" error={errors?.board_name?.message}>
        <input
          type="text"
          disabled={disableName || disableName2}
          id="name"
          className="border-solid border rounded-md px-1 py-1 mb-3"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder='e.g. Web Design'
          required
        />
      </FormRow>
      <div className="text-black">
        <span className="text-gray-400 mb-2">Board Columns</span>
        {columns.map((column, index) => (
          <div key={index} className="flex">
            <input
              type="text"
              className="border-solid border text-gray-500 rounded-md px-2 py-1 mb-3 w-[90%]"
              placeholder="Done"
              value={column.name}
              onChange={(e) => handleColumnChange(e, index)}
            />
            <span
              onClick={() => {
                const updatedColumns = columns.filter((col, i) => i !== index);
                setColumns(updatedColumns);
              }}
              className="hover:text-red-500 ml-2 mb-3 cursor-pointer"
            >
              <HiXMark className="text-4xl text-gray-400 hover:text-indigo-600" />
            </span>
          </div>
        ))}
      </div>

      <div className="">
        <div
          onClick={() => {
            const newColumn = { name: '', tasks: [] }; // You can set default values for new columns
            setColumns([...columns, newColumn]);
          }}
          className="capitalize text-center text-indigo-500 rounded-full py-2 bg-gray-300 w-full text-lg mb-3"
        >
          + Add New Column
        </div>
        <button
          type="submit"
          className="capitalize text-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default EditBoardForm;
