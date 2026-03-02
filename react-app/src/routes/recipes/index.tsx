import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";
import type { Recipe, RecipesResponse } from "../../types/Recipe";

export const Route = createFileRoute("/recipes/")({
  component: Recipes,
});

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=50")
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Laden der Rezepte");
        return res.json();
      })
      .then((data: RecipesResponse) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-xl">Lade Rezepte...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        🍽 Alle Rezepte
      </h1>
      <p className="text-gray-500 text-center mb-8">
        {recipes.length} Rezepte gefunden
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}