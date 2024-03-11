import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/dataSlice';
import { HiXMark } from 'react-icons/hi2';
import FormRow from '../../ui/FormRow';
import { v4 as uuidv4 } from 'uuid';

function BoardForm({ onCloseModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState([{ name: "Todo", tasks: [] }]);
  const [columnInputs, setColumnInputs] = useState([{ id: 0 }]);

  useEffect(() => {
    register("board_name");
  }, [register]);

  const handleAddColumnInput = () => {
    setColumnInputs([...columnInputs, { id:  uuidv4()}]);
  };

  const handleRemoveColumnInput = (id) => {
    setColumnInputs(columnInputs.filter(input => input.id !== id));
    setColumns(columns.filter((col, index) => index !== columns.length - 1));
  };

  const handleBoard = (data) => {
    const newColumns = columns.map(column => ({ name: column.name, tasks: [] }));
    const newBoard = { name: boardName, columns: newColumns, id: uuidv4() };
    dispatch(addBoard(newBoard));
    onCloseModal();
  };

  const handleColumnChange = (e, index) => {
    const { value } = e.target;
    const updatedColumns = [...columns];
    updatedColumns[index] = { name: value, tasks: [] };
    setColumns(updatedColumns);
  };

  return (
    <form className='min-w-[400px]' onSubmit={handleSubmit(handleBoard)}>
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-400 text-gray-600">Add New Board</h1>
      <FormRow label="Board Name" error={errors?.board_name?.message}>
        <input
          type="text"
          id="name"
          className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder='e.g. Web Design'
          required
        />
      </FormRow>
      <div className="text-black">
        <span className="dark:text-gray-400 text-gray-600">Board Columns</span>
        {columnInputs.map((input, index) => (
          <div key={input.id} className="flex">
            <input
              type="text"
              className="border-solid border text-gray-500 rounded-sm px-2 py-1 mb-3 w-[90%]"
              placeholder="Done"
              value={columns[index]?.name || ''}
              onChange={(e) => handleColumnChange(e, index)}
            />
            {(index > 0 || columnInputs.length > 1) && (
              <span
                onClick={() => handleRemoveColumnInput(input.id)}
                className="hover:text-red-500 ml-2 mb-3 cursor-pointer"
              >
                <HiXMark className="text-3xl text-gray-400" />
              </span>
            )}
           </div>
         ))}
      </div>

      <div className="">
        <div
          onClick={handleAddColumnInput}
          className="capitalize text-center text-indigo-500 rounded-full py-2 bg-gray-300 cursor-pointer w-full text-lg mb-3"
        >
          + Add New Column
        </div>
        <button
          type="submit"
          className="capitalize text-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg"
        >
          Create New Board
        </button>
      </div>
    </form>
  );
}

export default BoardForm;
