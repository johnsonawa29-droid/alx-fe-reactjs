import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ ADD THIS

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      title,
      ingredients,
      steps, // ✅ INCLUDE THIS
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps(""); // ✅ RESET
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      /> {/* ✅ ADD THIS */}

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
