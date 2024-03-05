import { useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"
import { useDispatch } from "react-redux"
import { addBoard } from "../../features/dataSlice"
import { HiXMark } from "react-icons/hi2"

function BoardForm({ onCloseModal }) {
    const { register, handleSubmit, reset, formState, getValues } = useForm()
    const dispatch = useDispatch()

    const handleBoard = () => {
        const board_name = getValues("board_name");
        dispatch(addBoard({ name: board_name }));
        onCloseModal();
    }

    const handleError = (errors) => {
        console.log(errors)
    }

    const { errors } = formState

  return (
    <form onSubmit={handleSubmit(handleBoard, handleError)} className="min-w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Add New Board</h1>
      <FormRow label='Name' error={errors?.name?.message}>
        <input type="text" id="name" className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3" {...register ('board_name', 
        {required: 'This field is required'})}/>
      </FormRow>
      <FormRow label="Column" error={errors?.column?.message}>
        <div className="flex items-center">
            <input type="id" id="column" className="border-solid border border-black rounded-sm px-2 py-1 mb-3 w-[90%]" {...register ('column', 
                {required: 'This field is required'})}
            />
            <span className="hover:text-red-500 ml-2 mb-3 cursor-pointer"><HiXMark className="text-3xl"/></span>
        </div>
      </FormRow>
      <div className="flex flex-col justify-between gap-3">
        <button className="capitalize self-center text-indigo-500 rounded-full py-2 bg-gray-300 w-full text-lg">+Add New Column</button>
        <button className="capitalize self-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg">Create New Board</button>
      </div>
    </form>
  )
}

export default BoardForm