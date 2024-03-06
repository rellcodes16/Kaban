const ButtonTemplate = ({ children, disabled, type, onClick, value }) => {

    const base = "rounded-full py-2 px-3 text-center text-lg"

    const styles = {
        primary: base + ' bg-indigo-600 text-gray-300',
        disabled: base + ' bg-indigo-200 text-white',
        danger: base + ' bg-red-500 text-white',
        reset : base + ' bg-gray-300 text-gray-600'
    }

    
  if(onClick)
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
        value={value}
    >
        {children}
    </button>
  )

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
    </button>
  )
}

export default ButtonTemplate