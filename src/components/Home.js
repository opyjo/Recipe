import axios from "axios";
import React, { useState } from "react";
import "./Home.css";
import RecipeList from "./RecipeList";

const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?";

const Home = ({ getDetails }) => {
  const [term, setTerm] = useState(null);
  const [recipeList, setRecipeList] = useState([]);

  const onChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const getRecipe = async () => {
    const response = await axios.get(` ${URL}i=${term}`);
    setRecipeList(response.data.meals);
  };

  return (
    <>
      <div className="searchBox wrapper">
        <label htmlFor="ingredient"></label>
        <input
          onChange={onChangeHandler}
          value={term}
          type="text"
          id="ingredient"
          name="ingredient"
          placeholder="Search for an ingredient"
        />
        <button onClick={getRecipe} className="btn">
          search
        </button>
      </div>
      <div className="container wrapper">
        {/* the below code ensure that if the ingredient selected is not found, The user will be notified A ternary operator is used to check if the recipeList is empty or not */}
        {recipeList ? (
          <RecipeList getDetails={getDetails} recipeList={recipeList} />
        ) : (
          <div className="noResult">
            No Meal Available for the selected Ingredient
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
