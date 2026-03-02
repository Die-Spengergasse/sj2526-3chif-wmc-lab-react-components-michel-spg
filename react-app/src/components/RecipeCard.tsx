import { Link } from "@tanstack/react-router";
import type { Recipe } from "../types/Recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <Link
      to="/recipes/$id"
      params={{ id: String(recipe.id) }}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {recipe.difficulty}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{recipe.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{recipe.cuisine}</p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>⏱ {totalTime} Min.</span>
          <span>{recipe.servings} Portions</span>
          <span>⭐ {recipe.rating}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {(recipe.tags ?? []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
