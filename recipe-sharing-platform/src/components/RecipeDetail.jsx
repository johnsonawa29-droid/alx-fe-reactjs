import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulating fetching recipe details
    const fetchRecipe = async () => {
      const data = {
        id: 1,
        title: "Jollof Rice",
        description: "A popular West African rice dish made with tomatoes and spices.",
        ingredients: ["Rice", "Tomatoes", "Onions", "Pepper", "Spices"],
      };

      setRecipe(data);
    };

    fetchRecipe();
  }, []);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-4 text-gray-700">{recipe.description}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
