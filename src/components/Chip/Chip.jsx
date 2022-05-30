import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, handleClick}) {
  const buttonClassName = isActive ? 'chip active' : 'chip' 
  return (
    <button className={buttonClassName} onClick={() => handleClick && handleClick(label)}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
