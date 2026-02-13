<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
  {recipes.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-white rounded-xl shadow-md overflow-hidden
                 transition-transform duration-300 ease-in-out
                 hover:shadow-xl hover:scale-105"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {recipe.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {recipe.summary}
        </p>

        <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
          View Recipe →
        </button>
      </div>
    </div>
  ))}
</div>
