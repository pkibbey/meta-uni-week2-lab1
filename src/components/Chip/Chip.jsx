import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick, handleClear}) {
  const buttonClassName = isActive ? 'chip active' : 'chip' 

  return (
    <button
      type="button"
      className={buttonClassName} 
      onClick={() => {
        onClick()
      }}
    >
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClear && handleClear('')
      }}>{`X`}</span>
    </button>
  )
}

export default Chip
