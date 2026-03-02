export type Recipe = {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
  tags: string[];
  mealType: string[];
};

export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};
