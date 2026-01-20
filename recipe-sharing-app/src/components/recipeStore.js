import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Replace all recipes
  setRecipes: (recipes) => set({ recipes }),

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed: filtered recipes based on searchTerm
  get filteredRecipes() {
    const term = get().searchTerm.toLowerCase();
    if (!term) return get().recipes;
    return get().recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.description.toLowerCase().includes(term)
    );
  },
}));
