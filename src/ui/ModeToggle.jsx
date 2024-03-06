import ToggleButton from "./ToggleButton"

function ModeToggle() {
  return (
    <div className="flex dark:bg-gray-900 bg-slate-200 gap-5 justify-center rounded-lg p-3 min-w-[200px]">
        <img src="icon-light-theme.svg" alt="light-theme-button" />
        <ToggleButton />
        <img src="icon-dark-theme.svg" alt="dark-theme-button" />
    </div>
  )
}

export default ModeToggle