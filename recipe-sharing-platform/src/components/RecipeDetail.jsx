import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 mb-6">{recipe.description}</p>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>

      {/* instructions */}
      <p className="text-gray-700 leading-relaxed">
        {recipe.instructions}
      </p>
    </div>
  );
};

export default RecipeDetail;
