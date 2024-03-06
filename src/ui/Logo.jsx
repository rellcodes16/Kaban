import { useDarkMode } from "../context/ColorModeToggle"

function Logo() {
  const { isDarkMode } = useDarkMode()
  

  return (
    <div>
        {isDarkMode ? (<img src="logo-light.svg" alt="logo-in-dark-mode" />) : (<img src="logo-dark.svg" alt="logo-in-light-mode" />)}
    </div>
  )
}

export default Logo