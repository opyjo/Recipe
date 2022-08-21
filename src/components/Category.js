import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Category.css";

const recipeURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Category = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getMealCategory = async () => {
      const response = await axios.get(recipeURL);
      setRecipe(response.data.categories);
    };

    getMealCategory().catch(console.err);
  }, []);

  const renderedRecipe = recipe.map((recipe) => {
    return (
      <div key={recipe.idCategory}>
        <img src={recipe.strCategoryThumb} alt={recipe.strCategory}></img>
        <p className="text">{recipe.strCategory}</p>
        <p className="desc">{recipe.strCategoryDescription}</p>
      </div>
    );
  });

  return (
    <div className="wrapper container">
      <>{renderedRecipe}</>
    </div>
  );
};

export default Category;
