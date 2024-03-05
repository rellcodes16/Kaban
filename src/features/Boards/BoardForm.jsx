import { useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"
import { useCreateBoard } from "./useCreateBoard"
import Spinner from "../../ui/Spinner"

function BoardForm({ onCloseModal }) {
    const { register, handleSubmit, reset, formState } = useForm()

    const { isCreating, createBoard } = useCreateBoard()

    if(isCreating) return <Spinner />

    const onSubmit = (data) => {
        createBoard({...data});
        reset()
        onCloseModal();
    
        // console.log(data)
    }

    const handleError = (errors) => {
        console.log(errors)
    }

    const { errors } = formState

  return (
    <form onSubmit={handleSubmit(onSubmit, handleError)} className="min-w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Add New Board</h1>
      <FormRow label='Name' error={errors?.name?.message}>
        <input type="text" id="name" className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3" {...register ('board_name', 
        {required: 'This field is required'})}/>
      </FormRow>
      <FormRow label='column' error={errors?.column.message}>
        <input type="number" id="unitPrice" className="border-solid border border-black ml-2 rounded-sm px-2 py-1 mb-3" disabled={isWorking} {...register ('unitPrice', 
        {required: 'This field is required', 
          min: {
            value: 1,
            message: 'Unit must be at least 1'
          }})}/>
      </FormRow>
      <div className="flex flex-col justify-between">
        <button className="capitalize self-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg">Create New Board</button>
      </div>
    </form>
  )
}

export default BoardForm