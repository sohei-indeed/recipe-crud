import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    setRecipes([
      ...recipes,
      { ...formData }
    ]);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
                        <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
                        <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
