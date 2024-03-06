import { useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"
import { HiXMark } from "react-icons/hi2"
import { useBoards } from "../../context/BoardsContext"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addCol } from "../../features/dataSlice"

function AddColumn() {
    const { register, handleSubmit, reset, formState, getValues } = useForm()
    const dispatch = useDispatch()

    const { activeBoard, setActiveBoard } = useBoards()

    const [colValue, setColValue] = useState({ name: "", tasks: [] });
    const [updatedBoard, setUpdatedBoard] = useState(activeBoard);

    const handleColumn = (e) => {
        e.preventDefault()
        dispatch(addCol({ updatedBoard: {...updatedBoard, columns: [...updatedBoard.columns, colValue]},
            activeBoard,
        }))
        setActiveBoard({
            ...updatedBoard,
            columns: [...updatedBoard.columns, colValue],
          });
        setColValue({ name: "", tasks: [] });
    }

    useEffect(() => {
        setUpdatedBoard(activeBoard);
      }, [activeBoard]);

    const handleError = (errors) => {
        console.log(errors)
    }

    const { errors } = formState

  return (
    <form onSubmit={handleSubmit(handleColumn, handleError)}>
        <FormRow label="Column" error={errors?.column?.message}>
            <div className="flex items-center">
                <input type="id" id="column" className="border-solid border border-black rounded-sm px-2 py-1 mb-3 w-[90%]" {...register ('column', 
                    {required: 'This field is required'})}
                />
                <span className="hover:text-red-500 ml-2 mb-3 cursor-pointer"><HiXMark className="text-3xl"/></span>
            </div>
        </FormRow>
        <button className="capitalize self-center text-indigo-500 rounded-full py-2 bg-gray-300 w-full text-lg">+Add New Column</button>
    </form>
  )
}

export default AddColumn