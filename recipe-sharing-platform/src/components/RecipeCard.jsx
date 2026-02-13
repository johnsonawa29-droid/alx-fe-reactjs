import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
