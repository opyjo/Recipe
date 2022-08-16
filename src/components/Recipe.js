import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ recipe, getDetails }) => {
  const navigate = useNavigate();

  const getRecipeDetails = () => {
    getDetails(recipe.idMeal);
    navigate("/details");
  };

  return (
    <>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="recipeImage"
      />
      <p className="recipeText">{recipe.strMeal}</p>
      <button onClick={getRecipeDetails} className="btn">
        Get Recipe
      </button>
    </>
  );
};

export default Recipe;
