import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({}); // ✅ REQUIRED

  // ✅ REQUIRED
  function validate() {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!steps.trim()) {
      newErrors.steps = "Steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return; // ✅ VALIDATION CHECK

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.ingredients && (
        <p className="text-red-500 text-sm">{errors.ingredients}</p>
      )}

      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
