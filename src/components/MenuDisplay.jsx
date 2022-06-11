import React from 'react';
import Chip from './Chip/Chip';
import NutritionalLabel from './NutritionalLabel/NutritionalLabel';

export default function MenuDisplay({
  data, selectedCategory, selectedRestaurant, selectedMenuItem, setSelectedMenuItem,
}) {
  const currentMenuItems = selectedCategory !== '' ? data.filter((item) => item.food_category === selectedCategory) : data;
  const menuItems = selectedRestaurant !== '' ? currentMenuItems.filter((item) => item.restaurant === selectedRestaurant) : currentMenuItems;

  return (
    <div className="MenuDisplay display">
      <div className="MenuItemButtons menu-items">
        <h2 className="title">Menu Items</h2>
        {!!selectedCategory && !!selectedRestaurant && menuItems.map((menuItem, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={menuItem.item_name}
            isActive={!!selectedMenuItem && menuItem.item_name === selectedMenuItem.item_name}
            onClick={() => setSelectedMenuItem(menuItem)}
            handleClear={() => setSelectedMenuItem({})}
          />
        ))}
      </div>

      <div className="NutritionFacts nutrition-facts">
        {!!selectedMenuItem && <NutritionalLabel item={selectedMenuItem} />}
      </div>
    </div>
  );
}
