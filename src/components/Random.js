import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecipeDetails.css";
import ReactPlayer from "react-player";
const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const Random = () => {
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const getRandomRecipe = async () => {
      const response = await axios.get(randomURL);
      setRandomRecipe(response.data.meals[0]);
    };

    getRandomRecipe().catch(console.err);
  }, []);

  return (
    <div className="wrapper">
      <h1>Meal Area: {randomRecipe.strArea}</h1>
      <h2>Meal Category: {randomRecipe.strCategory}</h2>
      <div className="container" style={{ marginBottom: "5rem" }}>
        <ReactPlayer url={randomRecipe.strYoutube} width="100%" height="50vh" />
        <div className="links">
          <ul className="ingredient">
            <li>{randomRecipe.strIngredient1}</li>
            <li>{randomRecipe.strIngredient2}</li>
            <li>{randomRecipe.strIngredient3}</li>
            <li>{randomRecipe.strIngredient4}</li>
            <li>{randomRecipe.strIngredient5}</li>
            <li>{randomRecipe.strIngredient6}</li>
            <li>{randomRecipe.strIngredient7}</li>
            <li>{randomRecipe.strIngredient8}</li>
            <li>{randomRecipe.strIngredient9}</li>
            <li>{randomRecipe.strIngredient10}</li>
            <li>{randomRecipe.strIngredient11}</li>
            <li>{randomRecipe.strIngredient12}</li>
            <li>{randomRecipe.strIngredient13}</li>
            <li>{randomRecipe.strIngredient14}</li>
            <li>{randomRecipe.strIngredient15}</li>
            <li>{randomRecipe.strIngredient16}</li>
            <li>{randomRecipe.strIngredient17}</li>
            <li>{randomRecipe.strIngredient18}</li>
            <li>{randomRecipe.strIngredient19}</li>
            <li>{randomRecipe.strIngredient}</li>
          </ul>
          <ul className="measure">
            <li>{randomRecipe.strMeasure1}</li>
            <li>{randomRecipe.strMeasure2}</li>
            <li>{randomRecipe.strMeasure3}</li>
            <li>{randomRecipe.strMeasure4}</li>
            <li>{randomRecipe.strMeasure5}</li>
            <li>{randomRecipe.strMeasure6}</li>
            <li>{randomRecipe.strMeasure7}</li>
            <li>{randomRecipe.strMeasure8}</li>
            <li>{randomRecipe.strMeasure9}</li>
            <li>{randomRecipe.strMeasure10}</li>
            <li>{randomRecipe.strMeasure11}</li>
            <li>{randomRecipe.strMeasure12}</li>
            <li>{randomRecipe.strMeasure13}</li>
            <li>{randomRecipe.strMeasure14}</li>
            <li>{randomRecipe.strMeasure15}</li>
            <li>{randomRecipe.strMeasure16}</li>
            <li>{randomRecipe.strMeasure17}</li>
            <li>{randomRecipe.strMeasure18}</li>
            <li>{randomRecipe.strMeasure19}</li>
            <li>{randomRecipe.strMeasure}</li>
          </ul>
        </div>
      </div>
      <h1 style={{ textTransform: "uppercase" }}>Instructions</h1>
      <div className="instr">{randomRecipe.strInstructions}</div>
    </div>
  );
};

export default Random;
