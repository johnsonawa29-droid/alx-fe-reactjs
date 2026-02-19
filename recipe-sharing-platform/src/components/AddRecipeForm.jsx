import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe);
    }

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md font-medium"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add New Recipe
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g. Jollof Rice"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="List ingredients..."
            rows="3"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe the steps..."
            rows="4"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
