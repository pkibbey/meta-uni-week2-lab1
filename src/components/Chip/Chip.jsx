import * as React from 'react';
import './Chip.css';

export default function Chip({
  label = '', isActive = false, onClick, handleClear,
}) {
  const buttonClassName = isActive ? 'chip active' : 'chip';

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (handleClear) { handleClear(''); }
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => {
        onClick();
      }}
    >
      <p className="label">{label}</p>
      <span
        className="close"
        role="button"
        onClick={handleClick}
        onKeyUp={(e) => e.key === 'Enter'}
        tabIndex="0"
      >
        X
      </span>
    </button>
  );
}
