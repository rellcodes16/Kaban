const ButtonTemplate = ({ children, disabled, type, onClick, value }) => {

    const base = "rounded-full bg-indigo-600 py-2 px-3 text-center text-lg text-gray-300"

    const styles = {
        primary: base,
        disabled: base + ' bg-indigo-200 text-white',
        danger: base + ' bg-red-500 text-white',
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