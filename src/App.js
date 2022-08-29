import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import Category from "./components/Category";
import RecipeDetails from "./components/RecipeDetails";
import Random from "./components/Random";

export default function App() {
  const [recipeDetails, setRecipeDetails] = useState([]);

  const getDetails = async (recipeInfo) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeInfo}`
    );
    setRecipeDetails(response.data.meals[0]);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <nav className="nav wrapper ">
        <div>
          <Link to="/">mealsperience</Link>
        </div>
        <ul>
          <li>
            <Link to="/random">prepare a random meal</Link>
          </li>
          <li>
            <Link to="/category">meal category</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home getDetails={getDetails} />} />
        <Route
          path="/details"
          element={
            recipeDetails && <RecipeDetails recipeDetails={recipeDetails} />
          }
        />
        <Route path="/random" element={<Random />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}
