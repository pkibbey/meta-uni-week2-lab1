import * as React from 'react';
import './Instructions.css';

export default function Instructions({ instructions }) {
  return (
    <aside className="instructions">
      <p>{instructions}</p>
    </aside>
  );
}
