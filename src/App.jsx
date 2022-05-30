import React, { useState } from "react"
import Header from './components/Header/Header'
import Instructions from './components/Instructions/Instructions'
import Chip from './components/Chip/Chip'
import NutritionalLabel from './components/NutritionalLabel/NutritionalLabel'

import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()
console.log('data: ', data);

export function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  
  const currentMenuItems = selectedCategory ? data.filter(item => item.food_category === selectedCategory) : []
  const filteredMenuItems = selectedRestaurant ? currentMenuItems.filter(item => item.restaurant === selectedRestaurant) : []

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category, index) => <Chip 
            key={index}
            label={category} 
            isActive={category === selectedCategory} 
            handleClick={setSelectedCategory}
           />)}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, index) => <Chip 
              key={index}
              label={restaurant} 
              isActive={restaurant === selectedRestaurant} 
              handleClick={() => setSelectedRestaurant(restaurant)}
             />)}
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <Instructions instructions={appInfo.instructions.start} />

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>            
            {filteredMenuItems.map((menuItem, index) => <Chip 
              key={index}
              label={menuItem.item_name} 
              isActive={menuItem.item_name === selectedMenuItem.item_name} 
              handleClick={() => setSelectedMenuItem(menuItem)}
             />)}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            <NutritionalLabel item={selectedMenuItem} />
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
