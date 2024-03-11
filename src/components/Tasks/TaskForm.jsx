import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editBoard } from "../../features/dataSlice";
import FormRow from "../../ui/FormRow";
import { HiXMark } from "react-icons/hi2";
import { useBoards } from "../../context/BoardsContext";

function AddTask({ onCloseModal }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const { activeBoard, setActiveBoard } = useBoards();

    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(
        activeBoard.columns.length > 0 ? activeBoard.columns[0].name : ""
    );
    const [subtasks, setSubtasks] = useState([]);

    const createNewTask = (data) => {
        const newTask = {
            title: data.title ? data.title : "Title",
            description: data.desc,
            subtasks: subtasks,
            status: data.status,
        };

        const updatedColumns = activeBoard.columns.map((column) => {
            if (column.name === newTask.status) {
                const updatedTasks = [...column.tasks, newTask];
                return { ...column, tasks: updatedTasks };
            }
            return column;
        });

        const updatedBoard = {
            ...activeBoard,
            columns: updatedColumns,
        };

        setActiveBoard(updatedBoard);
        dispatch(editBoard({ updatedBoard, activeBoard }));
        reset();
        onCloseModal()
    };

    const removeSubtask = (index) => {
        const updatedSubtasks = [...subtasks];
        updatedSubtasks.splice(index, 1);
        setSubtasks(updatedSubtasks);
    };

    const handleAddSubtask = (e) => {
        e.preventDefault()
        setSubtasks([...subtasks, { title: "", isCompleted: false }]);
    };

    const handleSubtaskChange = (index, field, value) => {
        const updatedSubtasks = [...subtasks];
        updatedSubtasks[index] = { ...updatedSubtasks[index], [field]: value };
        setSubtasks(updatedSubtasks);
    };

    return (
        <form onSubmit={handleSubmit(createNewTask)} className="min-w-[500px] text-black">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-400 text-gray-600">Add New Task</h1>
            <FormRow label='Title' error={errors?.title?.message}>
                <input
                    type="text"
                    id="title"
                    className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3"
                    {...register('title', { required: 'This field is required' })}
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </FormRow>
            <FormRow label='Description' error={errors?.desc?.message}>
                <textarea
                    cols="3"
                    rows="3"
                    placeholder="e.g. It is always good to take a break. This 15 minutes break will recharge the batteries a little."
                    type="text"
                    id="desc"
                    className="border-solid border border-gray-500 rounded-sm px-1 py-1 mb-3"
                    {...register('desc', { required: 'This field is required' })}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormRow>
            {subtasks.map((subtask, index) => (
                <FormRow key={index} label={`Subtask ${index + 1}`} error={errors?.subtasks?.message}>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="border-solid border border-black rounded-sm px-2 py-1 mb-3 w-[90%]"
                            value={subtask.title}
                            onChange={(e) => handleSubtaskChange(index, 'title', e.target.value)}
                        />
                        <span
                            onClick={() => removeSubtask(index)}
                            className="hover:text-red-500 ml-2 mb-3 cursor-pointer"
                        >
                            <HiXMark className="text-3xl" />
                        </span>
                    </div>
                </FormRow>
            ))}
            <button onClick={handleAddSubtask} className="capitalize self-center text-indigo-500 rounded-full py-2 bg-gray-300 w-full text-lg">+ Add New Subtask</button>
            <FormRow label="Status" error={errors?.status?.message}>
                <div className="flex items-center">
                    <select
                        id="status"
                        className="border-solid border border-gray-400 text-black rounded-sm px-2 py-1 mb-3 w-[100%]"
                        {...register('status', { required: 'This field is required' })}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        {activeBoard?.columns?.map((option, index) => (
                            <option key={index} value={option.name}>{option.name}</option>
                        ))}
                    </select>
                </div>
            </FormRow>
            <div className="flex flex-col justify-between gap-3">
                <button type="submit" className="capitalize self-center bg-indigo-500 rounded-full py-2 text-gray-300 w-full text-lg">
                    Create Task
                </button>
            </div>
        </form>
    );
}

export default AddTask;


