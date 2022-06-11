import * as React from 'react';
import { nutritionFacts } from '../../constants';
import NutritionalFact from '../NutritionalFact/NutritionalFact';
import './NutritionalLabel.css';

export default function NutritionalLabel({ item }) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((fact) => (
          <NutritionalFact
            key={fact.id}
            label={fact.label}
            value={item[fact.attribute]}
          />
        ))}
      </ul>
    </div>
  );
}
