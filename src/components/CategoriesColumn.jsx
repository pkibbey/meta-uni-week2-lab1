import React from 'react';
import Chip from './Chip/Chip';

export default function CategoriesColumn({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="CategoriesColumn col">
      <div className="categories options">
        <h2 className="title">Categories</h2>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            isActive={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
            handleClear={() => setSelectedCategory('')}
          />
        ))}
      </div>
    </div>
  );
}
