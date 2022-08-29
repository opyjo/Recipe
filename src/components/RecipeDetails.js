import "./RecipeDetails.css";
import ReactPlayer from "react-player";

const RecipeDetails = ({ recipeDetails }) => {
  return (
    <div className="wrapper">
      <h1>Meal Area: {recipeDetails.strArea}</h1>
      <h2>Meal Category: {recipeDetails.strCategory}</h2>
      <div className="container" style={{ marginBottom: "5rem" }}>
        <ReactPlayer
          url={recipeDetails.strYoutube}
          width="100%"
          height="50vh"
        />
        <div className="links">
          <ul className="ingredient">
            <li>{recipeDetails.strIngredient1}</li>
            <li>{recipeDetails.strIngredient2}</li>
            <li>{recipeDetails.strIngredient3}</li>
            <li>{recipeDetails.strIngredient4}</li>
            <li>{recipeDetails.strIngredient5}</li>
            <li>{recipeDetails.strIngredient6}</li>
            <li>{recipeDetails.strIngredient7}</li>
            <li>{recipeDetails.strIngredient8}</li>
            <li>{recipeDetails.strIngredient9}</li>
            <li>{recipeDetails.strIngredient10}</li>
            <li>{recipeDetails.strIngredient11}</li>
            <li>{recipeDetails.strIngredient12}</li>
            <li>{recipeDetails.strIngredient13}</li>
            <li>{recipeDetails.strIngredient14}</li>
            <li>{recipeDetails.strIngredient15}</li>
            <li>{recipeDetails.strIngredient16}</li>
            <li>{recipeDetails.strIngredient17}</li>
            <li>{recipeDetails.strIngredient18}</li>
            <li>{recipeDetails.strIngredient19}</li>
            <li>{recipeDetails.strIngredient}</li>
          </ul>
          <ul className="measure">
            <li>{recipeDetails.strMeasure1}</li>
            <li>{recipeDetails.strMeasure2}</li>
            <li>{recipeDetails.strMeasure3}</li>
            <li>{recipeDetails.strMeasure4}</li>
            <li>{recipeDetails.strMeasure5}</li>
            <li>{recipeDetails.strMeasure6}</li>
            <li>{recipeDetails.strMeasure7}</li>
            <li>{recipeDetails.strMeasure8}</li>
            <li>{recipeDetails.strMeasure9}</li>
            <li>{recipeDetails.strMeasure10}</li>
            <li>{recipeDetails.strMeasure11}</li>
            <li>{recipeDetails.strMeasure12}</li>
            <li>{recipeDetails.strMeasure13}</li>
            <li>{recipeDetails.strMeasure14}</li>
            <li>{recipeDetails.strMeasure15}</li>
            <li>{recipeDetails.strMeasure16}</li>
            <li>{recipeDetails.strMeasure17}</li>
            <li>{recipeDetails.strMeasure18}</li>
            <li>{recipeDetails.strMeasure19}</li>
            <li>{recipeDetails.strMeasure}</li>
          </ul>
        </div>
      </div>
      <h1 style={{ textTransform: "uppercase" }}>Instructions</h1>
      <div className="instr">{recipeDetails.strInstructions}</div>
    </div>
  );
};

export default RecipeDetails;
