function Task({task}) {
  return (
    <div className={`dark:bg-gray-800 bg-white text-gray-600 dark:text-gray-400 rounded-lg p-5 min-h-[70px] mt-5 min-w-[300px] mr-2 cursor-pointer `}>
        {task.title}
    </div>
  )
}

export default Task