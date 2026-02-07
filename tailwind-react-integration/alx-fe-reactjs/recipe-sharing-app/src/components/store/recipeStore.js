import { create } from 'zustand';
import { nanoid } from 'nanoid'; // optional, for generating unique IDs

export const useRecipeStore = create((set) => ({
  recipes: [
    // example initial data
    { id: '1', title: 'Pancakes', description: 'Fluffy pancakes with syrup' },
    { id: '2', title: 'Spaghetti', description: 'Classic spaghetti with tomato sauce' },
  ],

  // Add a recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: nanoid() }],
    })),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
