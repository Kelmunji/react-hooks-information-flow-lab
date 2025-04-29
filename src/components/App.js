import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function onCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Filter items based on selected category
  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Filter onCategoryChange={onCategoryChange} />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;
