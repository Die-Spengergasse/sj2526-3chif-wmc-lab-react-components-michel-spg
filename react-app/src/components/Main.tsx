import RecipeCard from "../components/RecipeCard";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import type { Recipe, RecipesResponse } from "../types/Recipe";

function getRandomRecipes(arr: Recipe[], count: number): Recipe[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Main() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Laden der Rezepte");
        return res.json();
      })
      .then((data: RecipesResponse) => {
        setRecipes(getRandomRecipes(data.recipes, 3));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl py-10 mx-auto text-center">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto dark:text-black">
            Discover delicious recipes for every day - quick, easy, and with
            just a few ingredients. Get inspired!
          </p>
          <Link
            to="/recipes"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-100 hover:scale-105 transition-all duration-200"
          >
            Discover all recipes →
          </Link>
        </div>
      </section>

      {/* ZUFÄLLIGE REZEPTE */}
      <main className="max-w-6xl mx-auto px-4 mb-16">
        <section className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Our Recommendations
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Three random recipes you can try today.
          </p>
        </section>

        {loading && (
          <p className="text-center text-gray-500 text-lg">Load recipes...</p>
        )}

        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  );
}
