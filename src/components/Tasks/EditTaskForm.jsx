import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import FormRow from "../../ui/FormRow"
import { HiXMark } from "react-icons/hi2"
import { useBoards } from "../../context/BoardsContext"

function EditTaskForm({ task }) {

  console.log('task', task)
    const { register, handleSubmit, reset, formState, getValues } = useForm({
      defaultValues: {
        title: task.title,
        desc: task.description,
      }
    })
    const dispatch = useDispatch()

    const { activeBoard } = useBoards()

    const handleTask = () => {

    }

    const handleError = (errors) => {
        console.log(errors)
    }

    const { errors } = formState

  return (
    <form onSubmit={handleSubmit(handleTask, handleError)} className="min-w-[500px] text-black">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Edit Task</h1>
      <FormRow label='Title' error={errors?.title?.message}>
        <input type="text" id="title" className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3" {...register ('title', 
        {required: 'This field is required'})}/>
      </FormRow>
      <FormRow label='Description' error={errors?.desc?.message}>
        <textarea cols="3" rows="3" placeholder="e.g. It is always good to take a break. This 15 minutes break will recharge the batteries a little." type="text" id="desc" className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3" {...register ('desc', 
        {required: 'This field is required'})}/>
      </FormRow>
      <FormRow label="Subtasks" error={errors?.subtasks?.message}>
        <div className="flex items-center">
            <input type="id" id="subtasks" className="border-solid border border-black rounded-sm px-2 py-1 mb-3 w-[90%]" {...register ('subtasks', 
                {required: 'This field is required'})}
            />
            <span className="hover:text-red-500 ml-2 mb-3 cursor-pointer"><HiXMark className="text-3xl"/></span>
        </div>
      </FormRow>
      <button className="capitalize self-center text-indigo-500 rounded-full py-2 bg-gray-300 w-full text-lg">+Add New Subtasks</button>
      <FormRow label="Subtasks" error={errors?.subtasks?.message}>
        <div className="flex items-center">
            <select id="subtasks" className="border-solid border border-gray-400 text-black rounded-sm px-2 py-1 mb-3 w-[100%]" 
            {...register('status', 
                {required: 'This field is required'})}>
                 {activeBoard?.columns?.map((option, index) => (
                            <option key={index} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    </FormRow>
      <div className="flex flex-col justify-between gap-3">
       <button className="capitalize self-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg">Create New Board</button>
      </div>
    </form>
  )
}

export default EditTaskForm