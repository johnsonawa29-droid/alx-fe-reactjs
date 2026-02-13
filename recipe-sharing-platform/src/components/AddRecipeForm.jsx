import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Include at least two ingredients separated by commas";
    }
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions,
      };

      console.log("New recipe submitted:", newRecipe);
      // TODO: save recipe to backend or local state

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
            }`}
            placeholder="e.g., Rice, Tomatoes, Onions"
          />
          {errors.ingredients && <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={6}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.instructions ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
            }`}
            placeholder="Describe the preparation steps..."
          />
          {errors.instructions && <p className="text-red-500 mt-1 text-sm">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
