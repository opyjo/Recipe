import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import RecipeDetails from "./RecipeDetails";

const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const Random = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const getRandomRecipe = async () => {
      const response = await axios.get(randomURL);
      setRecipeDetails(response.data.meals[0]);
    };

    getRandomRecipe().catch(console.err);
  }, []);

  console.count();

  return <RecipeDetails recipeDetails={recipeDetails} />;
};

export default Random;
