import React from "react";

function RecipeView({ recipe, index, setRecipes }) {
  const deleteRecipe = () => {
    setRecipes(prevRecipes => {
      return prevRecipes.filter((_, i) => i !== index);
    });
  };

  return (
    <tr>
      <td>
        {recipe.name}
      </td>
      <td>
        {recipe.cuisine}
      </td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeView;
