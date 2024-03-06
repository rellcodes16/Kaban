// ToggleButton.js
import { useState } from 'react';
import { useDarkMode } from '../context/ColorModeToggle';

const ToggleButton = () => {
    const { isDarkMode, toggleMode } = useDarkMode()
//   const [isOn, setIsOn] = useState(false);

//   const toggleButton = () => {
//     setIsOn(prevState => !prevState);
//   };

  return (
    <div className="flex items-center justify-center">
      <button
        className='w-11 h-5 flex px-1 items-center justify-start rounded-full bg-indigo-600 focus:outline-none'
        onClick={toggleMode}
      >
        <div className={`w-5 h-4 rounded-full bg-white ${isDarkMode ? 'transform translate-x-5' : ''}`}></div>
      </button>
    </div>
  );
};

export default ToggleButton;
