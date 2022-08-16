import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipeList, getDetails }) => {
  const renderedRecipeList = recipeList.map((recipe) => {
    return (
      <div key={recipe.idMeal}>
        <Recipe recipe={recipe} getDetails={getDetails} />
      </div>
    );
  });
  return <>{renderedRecipeList}</>;
};

export default RecipeList;
