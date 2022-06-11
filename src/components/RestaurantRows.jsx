import React from 'react';
import Chip from './Chip/Chip';

export default function RestaurantRows({ restaurants, selectedRestaurant, setSelectedRestaurant }) {
  return (
    <div className="RestaurantsRow">
      <h2 className="title">Restaurants</h2>
      <div className="restaurants options">
        {restaurants.map((restaurant) => (
          <Chip
            key={restaurant}
            label={restaurant}
            isActive={restaurant === selectedRestaurant}
            onClick={() => setSelectedRestaurant(restaurant)}
            handleClear={() => setSelectedRestaurant('')}
          />
        ))}
      </div>
    </div>
  );
}
