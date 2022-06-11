import * as React from 'react';
import './NutritionalFact.css';

export default function NutritionalLabelFact({ label, value }) {
  return (
    <li className="nutritional-fact">
      <span className="fact-label">{label}</span>
      <span className="fact-value">{value}</span>
    </li>
  );
}
