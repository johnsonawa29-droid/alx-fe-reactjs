import { Link } from "react-router-dom"; // Must import Link
import data from "../data.json";

const HomePage = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipes/${recipe.id}`} // Link to RecipeDetail page
          className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
