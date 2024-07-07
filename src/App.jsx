import React from "react";
import "./index.css";

export default function App() {
  const [randomWord, setRandomWord] = React.useState("");
  const [recipeBookString, setRecipeBookString] = React.useState(
    "Chocolate Chip Cookies\nAvocado Toast\nGreek Salad\nSpaghetti Carbonara\nBeef Burrito\nCentral Asian Plov\nSpaghetti\nCalifornia Styled Sushi Rolls\nSeafood Lasagna\nYam Pottage\nSpecial Mixed Fried Rice\nKelewele\nCoffee and Walnut Cake"
  );
  const recipeBookArray = recipeBookString.split("\n");

  function typeRandomRecipe(event) {
    setRecipeBookString(event.target.value);
  }

  function recipeList() {
    const random = Math.floor(Math.random() * recipeBookArray.length);
    setRandomWord(recipeBookArray[random]);
  }

  return (
    <div className="style-type">
      <h1>A recipe from Academy Recipe Book 2024</h1>
      <h2>
        Do you struggle what to cook today for the dinner? Choose one ready
        recipe from our Book.
      </h2>
      <h2>Choose one from the list below or add your recipe:</h2>
      <textarea
        className="display-linebreak"
        value={recipeBookString}
        onChange={typeRandomRecipe}
      />
      <button className="button-style" onClick={recipeList}>
        Random Recipe
      </button>
      <h2>{randomWord}</h2>
    </div>
  );
}
