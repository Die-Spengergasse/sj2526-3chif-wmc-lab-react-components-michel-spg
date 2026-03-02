import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import type { Recipe } from "../../types/Recipe";
import RecipeDetailCard from "../../components/RecipeDetailCard";

export const Route = createFileRoute("/recipes/$id")({
  component: RecipeDetailPage,
});

function RecipeDetailPage() {
  const { id } = Route.useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Rezept nicht gefunden");
        return res.json();
      })
      .then((data: Recipe) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-xl">Lade Rezept...</p>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-red-500 text-xl">{error ?? "Rezept nicht gefunden"}</p>
        <Link
          to="/recipes"
          className="mt-4 inline-block text-orange-600 hover:underline"
        >
          ← Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Link
        to="/recipes"
        className="text-orange-600 hover:underline mb-6 inline-block"
      >
        ← Zurück zur Übersicht
      </Link>

      {/* Header */}
      <RecipeDetailCard recipe={recipe} />
    </main>
  );
}
