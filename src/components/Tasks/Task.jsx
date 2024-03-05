function Task({task}) {
  return (
    <div className="bg-gray-800 rounded-lg p-5 min-h-[70px] mt-5 min-w-[300px] mr-2">
        {task.title}
    </div>
  )
}

export default Task