import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  const [filter, setFilter] = useState("All")


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const foodArray = [...foods, newFood]
    setFoods(foodArray)
  }

  function handleClick(foodID) {
    const newFoodArray = foods.map(food => {
      if (food.id === foodID) {
        food.heatLevel++
        return food
      } else {
        return food
      }
    })
    console.log(newFoodArray)
    setFoods(newFoodArray)
  }

  function handleFilter(e) {
    setFilter(e.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filter === 'All') {
      return true
    } else {
      return food.cuisine === filter
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={e =>handleFilter(e)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
