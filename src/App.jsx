/* eslint-disable no-console */
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions';

import { createDataSet } from './data/dataset';
import './App.css';
import RestaurantRows from './components/RestaurantRows';
import MenuDisplay from './components/MenuDisplay';
import CategoriesColumn from './components/CategoriesColumn';

// don't move this!
export const appInfo = {
  title: 'Fast Food Feud 🍔!',
  tagline: 'Folks\' Favorite Friendly Fuel Finder For Food Facts',
  description: 'Finding healthy food is hard. Sometimes we just settle for what\'s available. That doesn\'t mean we shouldn\'t know what\'s going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.',
  dataSource: 'All data pulled from the MenuStat.org interactive online database.',
  instructions: {
    start: 'Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you\'ll be able to choose from a list of menu items and see their nutritional content.',
    onlyCategory: 'Now select a fast food restaurant from the list above!',
    onlyRestaurant: 'Now select a category from the list on the left!',
    noSelectedItem: 'Almost there! Choose a menu item and you\'ll have the fast food facts right at your fingertips!',
    allSelected: 'Great choice! Amazing what a little knowledge can do!',
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

function DataSource() {
  return (
    <div className="data-sources">
      <p>{appInfo.dataSource}</p>
    </div>
  );
}

export function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  return (
    <main className="App">
      <CategoriesColumn
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="container">
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />
        <RestaurantRows
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
        />
        <Instructions
          instructions={appInfo.instructions.start}
        />
        <MenuDisplay
          data={data}
          selectedCategory={selectedCategory}
          selectedRestaurant={selectedRestaurant}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
        <DataSource />
      </div>
    </main>
  );
}

export default App;
