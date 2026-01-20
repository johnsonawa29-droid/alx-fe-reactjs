import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Replace the entire recipe list
  setRecipes: (recipes) => set({ recipes }),
}));
